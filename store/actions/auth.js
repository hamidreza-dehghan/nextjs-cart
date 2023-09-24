import Cookies from 'universal-cookie'

const cookies = new Cookies(null, { path: '/' })
export const AUTH_LOGIN = () => async (dispatch) => {
  cookies.set('auth', true)

  dispatch({ type: 'AUTH_LOGIN' })
  // await fetch('https://64ce6e6d0c01d81da3eecfda.mockapi.io/users')
  //   .then((response) => response.json())
  //   .then((result) => dispatch({ type: 'AUTH_SUCCESS', payload: result }))
  //   .catch((err) => {
  //     dispatch({ type: 'AUTH_FAILED', payload: err })
  //   })
}

export const AUTH_LOGOUT = () => async (dispatch) => {
  cookies.set('auth', false)

  dispatch({ type: 'AUTH_LOGOUT' })
  // await fetch('https://64ce6e6d0c01d81da3eecfda.mockapi.io/users')
  //   .then((response) => response.json())
  //   .then((result) => dispatch({ type: 'AUTH_SUCCESS', payload: result }))
  //   .catch((err) => {
  //     dispatch({ type: 'AUTH_FAILED', payload: err })
  //   })
}
