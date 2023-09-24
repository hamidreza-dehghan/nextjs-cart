import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Cookies from 'universal-cookie'
import { useDispatch, useSelector } from 'react-redux'

import { AUTH_LOGOUT } from 'store/actions/auth'

export function Auth() {
  const dispatch = useDispatch()
  // const auth = useSelector((state) => state.auth)

  const cookies = new Cookies(null, { path: '/' })
  const auth = cookies.get('auth')

  const [authStatus, setAuthStatus] = useState(false)

  useEffect(() => {
    // console.log(auth)
    setAuthStatus(auth)
  }, [cookies, auth])

  const logoutHandler = (e) => {
    e.preventDefault()
    dispatch(AUTH_LOGOUT())
    window.location.reload()
  }

  console.log('AUTH STATUS', auth, authStatus)
  return authStatus === true ? (
    <a href="#" onClick={(e) => logoutHandler(e)}>
      Logout
    </a>
  ) : (
    <Link href="/login">Login</Link>
  )
}

export default Auth
