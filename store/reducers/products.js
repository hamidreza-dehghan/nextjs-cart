const initialState = {
  loading: false,
  list: [],
}

// eslint-disable-next-line default-param-last
export default function productsReducer(state = initialState, action) {
  switch (action?.type) {
    case 'PRODUCTS_REQUEST':
      return {
        ...state,
        lading: true,
        list: [],
      }
    case 'PRODUCTS_SUCCESS':
      return {
        ...state,
        lading: false,
        list: action.payload,
      }
    case 'PRODUCTS_FAILED':
      return {
        ...state,
        lading: false,
        list: [],
      }
    default:
      return state
  }
}
