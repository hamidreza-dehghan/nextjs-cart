const initialState = {
  loading: false,
  auth: false,
}

// eslint-disable-next-line default-param-last
export default function authReducer(state = initialState, action) {
  switch (action?.type) {
    case 'AUTH_LOGIN':
      return {
        ...state,
        loading: false,
        auth: true,
      }
    case 'AUTH_LOGOUT':
      return {
        ...state,
        loading: false,
        auth: false,
      }
    default:
      return state
  }
}
