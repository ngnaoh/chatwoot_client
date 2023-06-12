import React, { ChangeEvent, FC, FormEvent } from 'react'
import withAuth from '../HoCs/withAuth'
import useSignIn from '../hooks/useSignIn'
import { navigate } from 'gatsby'
import { PageAuthProps } from '../utils/types'
import SignInContainer from '../containers/SignInContainer'

const SignIn: FC<PageAuthProps> = () => {
  return <SignInContainer />
}

export default withAuth(SignIn)
