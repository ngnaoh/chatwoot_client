import React from 'react'
import { navigate } from 'gatsby'
import { isLoggedIn } from '../services/auth'

type PrivateRouteProps = {
  component: JSX.Element
  location: string
}

const PrivateRoute = ({ component: Component, location, ...rest }: PrivateRouteProps) => {
  if (!isLoggedIn() && location.pathname !== `/app/login`) {
    navigate('/app/login')
    return null
  }

  return <Component {...rest} />
}

export default PrivateRoute
