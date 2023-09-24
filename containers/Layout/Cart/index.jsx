/** @jsxImportSource @emotion/react */
import React, { useState } from 'react'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { css } from '@emotion/react'
import { ShoppingCartSimple, Minus, Plus } from '@phosphor-icons/react'

import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from 'store/actions/cart'
import useOuterClick from 'hooks/useOuterClick'

function Cart() {
  const styles = css`
    > button {
      background: transparent;
      border: 0;
      cursor: pointer;
      border-radius: 5px;
      padding: 5px 10px;
      margin: -5px 0;
      span {
        color: #fff;
        background: #333;
        padding: 2px 5px;
        border-radius: 5px;
        float: left;
        margin: 2px 10px 0 0;
      }
      &:hover {
        background: rgba(255, 255, 255, 0.2);
      }
    }
    .cart-box {
      display: none;
      position: fixed;
      z-index: 9999999;
      width: 100%;
      max-width: 250px;
      right: 20px;
      top: 55px;
      background: #fff;
      padding: 5px;
      box-sizing: border-box;
      border-radius: 5px;
      box-shadow: 0 0 0 2px purple;
      &.open {
        display: block;
      }
    }
  `
  const cart = useSelector((state) => state.cart)
  const [open, setOpen] = useState(false)
  const ref = useOuterClick(() => {
    setOpen(false)
  })

  return (
    <div css={styles} ref={ref}>
      <button onClick={() => setOpen(true)}>
        <ShoppingCartSimple size="20" color="#FFFFFF" />
        <span>{cart.total}</span>
      </button>
      <div className={`cart-box ${open ? 'open' : ''}`}>
        <CartList cart={cart} />
      </div>
    </div>
  )
}

export function CartList({ checkoutPage = false }) {
  const styles = css`
    .cart-list {
      max-height: calc(100vh - 110px);
      overflow: auto;
      padding-right: 5px;
      margin-right: -5px;
      .cart-item {
        background: #eee;
        padding: 10px;
        margin-bottom: 5px;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        label {
        }
        .cart-buttons {
        }
      }
    }
    .cart-footer {
      display: flex;
      justify-content: space-between;
      button,
      a {
        cursor: pointer;
      }
      & * {
        border: 0;
        border-radius: 5px;
        padding: 10px;
        color: #fff;
        text-decoration: none;
        font-size: 0.8rem;
        &:first-child {
          background-color: #333;
        }
        &:last-child {
          background-color: purple;
        }
      }
    }
  `
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)

  return (
    <div css={styles}>
      <div className="cart-list">
        {cart?.list?.length > 0 ? (
          cart?.list.map((item) => (
            <div key={item.id} className="cart-item">
              <label>{item.title}</label>
              <div className="cart-buttons">
                <CartButtons
                  addHandler={() => dispatch(ADD_TO_CART(item))}
                  removeHandler={() => dispatch(REMOVE_FROM_CART(item))}
                  item={item}
                />
              </div>
            </div>
          ))
        ) : (
          <p>The cart is empty!</p>
        )}
      </div>
      {cart.list.length > 0 && (
        <div className="cart-footer">
          <button onClick={() => dispatch(EMPTY_CART())}>Empty cart</button>
          {checkoutPage ? (
            <label>Sum : {cart.sum}$</label>
          ) : (
            <Link href="checkout">Checkout ({cart.sum}$)</Link>
          )}
        </div>
      )}
    </div>
  )
}

export function CartButtons({ addHandler, removeHandler, item }) {
  const styles = css`
    border-radius: 5px;
    & > * {
      float: right;
      min-width: 25px;
      height: 25px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    button {
      border: 0;
      background-color: purple;
      color: #fff;
      cursor: pointer;
      &:first-child {
        border-radius: 0 5px 5px 0;
      }
      &:last-child {
        border-radius: 5px 0 0 5px;
      }
    }
    span {
      background-color: #fff;
      padding: 0 5px;
      color: #666;
      font-size: 0.9rem;
    }
  `
  return (
    <div css={styles}>
      <button onClick={() => addHandler(item)}>
        <Plus />
      </button>
      <span>{item?.amount || 0}</span>
      <button onClick={() => removeHandler(item)}>
        <Minus />
      </button>
    </div>
  )
}

export default Cart
