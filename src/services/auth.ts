import { APP_USER } from '../constants'
import { UserLoginType, UserType } from '../types'

export const isBrowser = () => typeof window !== 'undefined'

export const getUser = () => {
  const user = window.localStorage.getItem(APP_USER)

  return isBrowser() && user ? JSON.parse(user) : {}
}

const setUser = (user: UserType) => window.localStorage.setItem(APP_USER, JSON.stringify(user))

export const handleLogin = ({ username, password }: UserLoginType) => {
  if (username === `john` && password === `pass`) {
    return setUser({
      username: `john`,
      name: `Johnny`,
      email: `johnny@example.org`,
    })
  }

  return false
}

export const isLoggedIn = () => {
  const user = getUser()

  return !!user.username
}

export const logout = (callback: () => void) => {
  setUser({})
  callback()
}
