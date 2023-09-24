/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import { useDispatch, useSelector } from 'react-redux'
import Image from 'next/image'

import { imageLoader } from 'utils'
import PageTitle from 'containers/Layout/PageTitle'
import { getProducts } from 'store/actions/products'
import { CartButtons } from 'containers/Layout/Cart'
import { ADD_TO_CART, REMOVE_FROM_CART } from 'store/actions/cart'

function Products({ data }) {
  const styles = css`
    display: inline-block;
    margin: -10px;
    .product {
      width: 300px;
      overflow: hidden;
      border-radius: 10px;
      position: relative;
      float: left;
      margin: 20px;
      box-shadow: 0 0 0 3px #f9f9f9, 0 0 0 0 purple;
      & * {
        transition: all 0.2s;
      }
      img {
        width: 100%;
        height: auto;
        display: flex;
        filter: grayscale(0);
      }
      label {
        position: absolute;
        z-index: 8;
        left: 10px;
        bottom: 10px;
        width: calc(100% - 20px);
        padding: 10px;
        box-sizing: border-box;
        text-align: left;
        border-radius: 10px;
        background: rgba(255, 255, 255, 0.5);
        color: #333;
        opacity: 0;
        span {
          display: block;
          width: fit-content;
          font-size: 0.8rem;
          margin-top: 5px;
          padding: 5px 10px;
          font-weight: bold;
          color: #fff;
          background: #333;
          border-radius: 16px;
        }
      }
      .cart-buttons {
        position: absolute;
        top: 10px;
        right: 10px;
        opacity: 0;
      }
      &:hover {
        box-shadow: 0 0 0 3px #f9f9f9, 0 0 0 5px purple;
        img {
          filter: grayscale(1);
        }
        label {
          background: rgba(255, 255, 255, 0.8);
          opacity: 1;
        }
        .cart-buttons {
          opacity: 1;
        }
      }
    }
    @media only screen and (max-width: 500px) {
      .product {
        label {
          bottom: 20px;
        }
      }
    }
  `
  return (
    <>
      <PageTitle title="Products" />
      <div css={styles}>
        {data?.map((item) => (
          <Product {...item} key={item.id} />
        ))}
      </div>
    </>
  )
}

function Product(product) {
  const { id, title, image, price } = product
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)

  return (
    <div className="product">
      <Image
        src={image}
        alt={title}
        width="300"
        height="300"
        loader={() => imageLoader(id)}
        loading="lazy"
      />
      <label>
        {title}
        <span>{price}$</span>
      </label>
      <div className="cart-buttons">
        <CartButtons
          addHandler={() => dispatch(ADD_TO_CART(product))}
          removeHandler={() => dispatch(REMOVE_FROM_CART(product))}
          item={cart.list.find((x) => x.id === id)}
        />
      </div>
    </div>
  )
}

Products.getInitialProps = async ({ reduxStore }) => {
  await reduxStore.dispatch(getProducts())
  const { products } = reduxStore.getState()
  return { data: products.list }
}

export default Products
