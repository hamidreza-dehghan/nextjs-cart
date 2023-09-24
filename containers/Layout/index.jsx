/** @jsxImportSource @emotion/react */
import React from 'react'
import TopMenu from 'containers/Layout/TopMenu'
import { css, useTheme } from '@emotion/react'

export default function Layout({ children }) {
  const theme = useTheme()
  const styles = css`
    margin: 20px;
    padding: 20px;
    background-color: ${theme.colors.light};
    border-radius: 10px;
  `
  return (
    <>
      <TopMenu />
      <main css={styles}>{children}</main>
    </>
  )
}
