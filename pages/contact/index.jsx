/** @jsxImportSource @emotion/react */
import React from 'react'
import PageTitle from 'containers/Layout/PageTitle'
import { At, MapTrifold, Phone } from '@phosphor-icons/react'
import { css } from '@emotion/react'
import { Typography } from 'components/Typography'

const styles = css`
  label {
    display: inline-block;
    width: 100%;
    padding: 10px 0;
    line-height: 32px;
    border-bottom: 2px solid #ccc;
    &:last-of-type {
      border-bottom: none;
    }
    svg {
      width: 30px;
      float: left;
      margin-right: 10px;
    }
  }
`

export function Contact() {
  return (
    <>
      <PageTitle title="Contact" />
      <p css={styles}>
        <label>
          <MapTrifold size={32} />
          No.72 - Street name - City - Country
        </label>
        <label>
          <Phone size={32} />
          <Typography variant="a" href="tel:893-327-0773">
            893-327-0773
          </Typography>
        </label>
        <label>
          <At size={32} />
          <Typography variant="a" href="mailto:info@ultimate.dev">
            info@ultimate.dev
          </Typography>
        </label>
      </p>
    </>
  )
}

export default Contact
