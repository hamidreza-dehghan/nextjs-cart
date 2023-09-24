export const getProducts = () => async (dispatch) => {
  dispatch({ type: 'PRODUCTS_REQUEST' })
  await fetch('https://64ce6e6d0c01d81da3eecfda.mockapi.io/products')
    .then((response) => response.json())
    .then((result) => dispatch({ type: 'PRODUCTS_SUCCESS', payload: result }))
    .catch((err) => {
      dispatch({ type: 'PRODUCTS_FAILED', payload: err })
    })
}

export const getOneProduct = () => {}
