/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react'
import { css } from '@emotion/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'

import PageTitle from 'containers/Layout/PageTitle'
import { CartList } from 'containers/Layout/Cart'
import { CHECKOUT_CART } from 'store/actions/cart'
import Typography from 'components/Typography'

function Checkout() {
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

  const dispatch = useDispatch()
  const total = useSelector((state) => state.cart.total)

  const [payment, setPayment] = useState(false)

  const { push } = useRouter()
  useEffect(() => {
    if (total === 0 && !payment) push('/products')
  }, [total])

  const checkoutHandler = (e) => {
    dispatch(CHECKOUT_CART())
    setPayment(true)
    e.preventDefault()
  }

  return payment ? (
    <>
      <Typography variant="h2">Successful Payment Process!</Typography>
      <Link href="products">Back to products page</Link>
    </>
  ) : (
    <>
      <PageTitle title="Checkout" />
      <div css={styles}>
        <form onSubmit={(e) => checkoutHandler(e)}>
          <label>Card Number</label>
          <input type="number" placeholder="**** **** **** ****" />

          <label>Expiration Date</label>
          <input type="text" placeholder="MM/YY" />

          <label>CVV</label>
          <input type="number" placeholder="***" />

          <label>Address</label>
          <input type="text" placeholder="City - Street - No." />

          <button>Submit</button>
        </form>
        <CartList checkoutPage />
      </div>
    </>
  )
}

export default Checkout
