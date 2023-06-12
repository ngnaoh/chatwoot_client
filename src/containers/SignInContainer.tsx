import React from 'react'
import useSignIn from '../hooks/useSignIn'
import { navigate } from 'gatsby'
import { Loader } from '@chatscope/chat-ui-kit-react'

const SignInContainer = () => {
  const { signInWithOtp, verifyOtp, isInputOTP, setEmail, setToken } = useSignIn({
    verifyOtpCb: (status) => {
      if (status) {
        navigate('/chatwoot')
      }
    },
  })

  const handleChangeOtp = (event: React.ChangeEvent<HTMLInputElement>) => {
    setToken(event.target.value)
  }

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handleSubmitOtp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    verifyOtp.mutate()
  }

  const handleSubmitEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    signInWithOtp.mutate()
  }

  return (
    <main className='h-screen w-screen flex justify-center items-center bg-slate-200'>
      <form
        name='otp'
        onSubmit={(e) => (isInputOTP ? handleSubmitOtp(e) : handleSubmitEmail(e))}
        className='w-96 bg-white p-10'>
        <input
          type='email'
          placeholder='Type Email here...'
          className='block w-full h-10 font-base px-3 mb-3 border border-solid border-gray-300 rounded-md box-border focus-visible:border-gray-500 focus-visible:outline-none disabled:bg-gray-300'
          onChange={handleChangeEmail}
          disabled={isInputOTP}
        />
        {isInputOTP && (
          <input
            type='text'
            placeholder='Type Otp here...'
            className='block w-full h-10 font-base px-3 mb-3 border border-solid border-gray-300 rounded-md box-border focus-visible:border-gray-500 focus-visible:outline-none'
            onChange={handleChangeOtp}
          />
        )}
        {verifyOtp.isLoading ||
          (signInWithOtp.isLoading && (
            <div className='flex w-full justify-center my-2'>
              <Loader />
            </div>
          ))}
        <button
          className='bg-slate-900 text-white font-bold text-base w-full h-10 rounded-md focus-visible:outline-none'
          type='submit'
          disabled={verifyOtp.isLoading || signInWithOtp.isLoading}>
          {isInputOTP ? 'Verify' : 'Sign In'}
        </button>
      </form>
    </main>
  )
}

export default SignInContainer
