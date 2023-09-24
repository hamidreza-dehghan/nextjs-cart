/** @jsxImportSource @emotion/react */
import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'
import { css } from '@emotion/react'

export default function Document() {
  const styles = css`
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    body {
      margin: 0;
      padding: 64px 0 0 0;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      font-family: sans-serif;
      overflow-y: scroll;
      > div {
        display: inline-block;
        width: 100%;
      }
    }
  `
  return (
    <Html lang="en" css={styles}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
