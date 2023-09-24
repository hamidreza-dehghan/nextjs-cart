/** @jsxImportSource @emotion/react */
import React from 'react'
import { useRouter } from 'next/router'
import { css } from '@emotion/react'
import Image from 'next/image'

import PageTitle from 'containers/Layout/PageTitle'
import list from '../list'

const styles = css`
  display: inline-block;
  position: relative;
  width: 100%;
  max-width: 800px;
  img {
    border-radius: 10px;
    border: 3px solid #eee;
    width: 40%;
    height: auto;
    float: left;
  }
  span {
    padding: 10px 20px;
    margin: 0 10px;
    background: #333;
    color: #fff;
    float: right;
    border-radius: 10px;
  }
  p {
    float: left;
    width: calc(60% - 20px);
    margin: 0;
    padding: 0 10px;
    box-sizing: border-box;
    text-align: justify;
    position: absolute;
    right: 0;
    bottom: 0;
  }
  @media only screen and (max-width: 500px) {
    span {
      margin: 10px 0;
      width: 100%;
      box-sizing: border-box;
      text-align: center;
    }
    img,
    p {
      width: 100%;
      position: static;
      padding: 0;
    }
  }
`

export function Product() {
  const router = useRouter()
  const productId = router.query.slug
  const product = list.find((p) => +p.id === +productId)
  return (
    product && (
      <div css={styles}>
        <PageTitle title={product.title} />
        <Image
          src={product.image}
          alt={product.title}
          width="330"
          height="330"
        />
        <span>{product.price}$</span>
        <p>{product.description}</p>
      </div>
    )
  )
}

export default Product
