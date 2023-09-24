import React, { useState } from 'react'
import { css } from '@emotion/react'
import { useDispatch } from 'react-redux'

import { AUTH_LOGIN } from 'store/actions/auth'
import PageTitle from 'containers/Layout/PageTitle'

const styles = css`
  display: flex;
  flex-direction: row;
  column-gap: 20px;
  & > * {
    width: 50%;
    max-width: 400px;
    background: #fff;
    padding: 10px;
    border-radius: 10px;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    label {
      padding: 5px 10px;
      box-sizing: border-box;
      width: 100%;
      font-size: 0.9rem;
    }
    input {
      width: 100%;
      box-sizing: border-box;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      margin-bottom: 16px;
    }
    button {
      align-self: end;
      padding: 10px 20px;
      background-color: purple;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  }
  .cart-list {
    max-height: calc(100vh - 425px) !important;
  }
  @media only screen and (max-width: 600px) {
    > form {
      width: 100%;
    }
    > div {
      display: none;
    }
  }
`

function Login() {
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const loginHandler = (e) => {
    e.preventDefault()
    dispatch(AUTH_LOGIN())
    // console.log('AUTH', auth)
    window.location = '/products'
  }

  return (
    <>
      <PageTitle title="Login" />
      <div css={styles}>
        <form onSubmit={(e) => loginHandler(e)}>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  )
}

export default Login
