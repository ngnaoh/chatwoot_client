import { navigate } from 'gatsby'
import { supabase } from '../services/supabase'
import React, { useEffect, useState } from 'react'
import { User } from '@supabase/supabase-js'

type PropsAreEqual<P> = (prevProps: Readonly<P>, nextProps: Readonly<P>) => boolean

const withAuth = <P extends object>(
  component: {
    (props: P): Exclude<React.ReactNode, undefined>
    displayName?: string
  },
  propsAreEqual?: PropsAreEqual<P> | false,
  componentName = component.displayName ?? component.name
): {
  (props: P): JSX.Element
  displayName: string
} => {
  function WithAuth(props: P) {
    const [user, setUser] = useState<User | null>(null)
    useEffect(() => {
      supabase.auth.getUser().then(({ data }) => {
        setUser(data?.user || null)
        if (!data.user?.aud) {
          return navigate('/sign-in')
        }
        if (['/sign-in/', '/'].includes(location.pathname)) navigate('/chatwoot')
      })
    }, [])

    return component({ ...props, user }) as JSX.Element
  }

  WithAuth.displayName = `withAuth(${componentName})`

  let wrappedComponent = propsAreEqual === false ? WithAuth : React.memo(WithAuth, propsAreEqual)

  return wrappedComponent as typeof WithAuth
}

export default withAuth
