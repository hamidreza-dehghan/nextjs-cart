// export const addToCart = (dispatch, product) => {
//   console.log('ACTION', product)
//   return dispatch({ type: 'ADD', payload: product })
// }

export const ADD_TO_CART = (product) => ({
  type: 'ADD',
  payload: product,
})

export const REMOVE_FROM_CART = (product) => ({
  type: 'REMOVE',
  payload: product,
})

export const EMPTY_CART = () => ({
  type: 'EMPTY',
})

export const CHECKOUT_CART = () => ({
  type: 'CHECKOUT',
})
