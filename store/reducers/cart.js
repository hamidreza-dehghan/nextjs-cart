const initialState = {
  list: [],
  total: 0,
  sum: 0,
}

// eslint-disable-next-line default-param-last
export default function cartReducer(state = initialState, action) {
  const product = action.payload || {}
  let products = state.list
  const itemInCart = products?.find((x) => x.id === product.id)
  switch (action?.type) {
    case 'ADD':
      products = itemInCart
        ? products.map((item) =>
            item.id === product.id
              ? { ...product, amount: itemInCart.amount + 1 }
              : { ...item }
          )
        : [...products, { ...product, amount: 1 }]

      return {
        list: [...products],
        total: state.total + 1,
        sum: +product.price + state.sum,
      }
    case 'REMOVE':
      if (state.total === 0 || itemInCart?.amount === 0 || !itemInCart)
        return { ...state }
      products = itemInCart
        ? products.map((item) =>
            +item.id === +product.id
              ? { ...product, amount: itemInCart.amount - 1 }
              : { ...item }
          )
        : [...products, { ...product, amount: 0 }]
      return {
        list: [...products.filter((item) => +item.amount !== 0)],
        total: state.total - 1,
        sum: state.sum - +product.price,
      }
    case 'EMPTY':
      return {
        list: [],
        total: 0,
        sum: 0,
      }
    case 'CHECKOUT':
      return {
        list: [],
        total: 0,
        sum: 0,
      }
    default:
      return state
  }
}
