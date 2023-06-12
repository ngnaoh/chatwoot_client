import { useState } from 'react'
import { supabase } from '../services/supabase'
import { useMutation } from '@tanstack/react-query'
import { NOOP, StatusResponse } from '../utils/constants'

type useSignInProps = {
  signInWithOtpCb?: (status?: number) => void
  verifyOtpCb?: (status?: number) => void
}
const useSignIn = ({ signInWithOtpCb = NOOP, verifyOtpCb = NOOP }: useSignInProps) => {
  const [email, setEmail] = useState('')
  const [token, setToken] = useState('')
  const [isInputOTP, setIsInputOTP] = useState(false)

  return {
    signInWithOtp: useMutation(
      () => {
        return supabase.auth.signInWithOtp({
          email,
        })
      },
      {
        onSuccess: () => {
          setIsInputOTP(true)
          signInWithOtpCb(StatusResponse.success)
        },
        onError: () => {
          signInWithOtpCb(StatusResponse.failed)
        },
      }
    ),
    verifyOtp: useMutation(
      () => {
        return supabase.auth.verifyOtp({ email, token, type: 'email' })
      },
      {
        onSuccess: () => {
          verifyOtpCb(StatusResponse.success)
        },
        onError: () => {
          verifyOtpCb(StatusResponse.failed)
        },
      }
    ),
    setEmail,
    isInputOTP,
    setIsInputOTP,
    setToken,
  }
}

export default useSignIn
