import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Cookies from 'universal-cookie'
import { useDispatch } from 'react-redux'

import { AUTH_LOGOUT } from 'store/actions/auth'

export function Auth() {
  const dispatch = useDispatch()

  const cookies = new Cookies(null, { path: '/' })
  const auth = cookies.get('auth')

  const [authStatus, setAuthStatus] = useState(false)

  useEffect(() => {
    setAuthStatus(auth)
  }, [cookies, auth])

  const logoutHandler = (e) => {
    e.preventDefault()
    dispatch(AUTH_LOGOUT())
    window.location.reload()
  }

  return authStatus === true ? (
    <a href="#" onClick={(e) => logoutHandler(e)}>
      Logout
    </a>
  ) : (
    <Link href="/login">Login</Link>
  )
}

export default Auth
