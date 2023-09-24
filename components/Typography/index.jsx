/** @jsxImportSource @emotion/react */
import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import theme from 'theme'

const getStyles = ({ variant }) => css`
  font-family: ${theme.typography[variant]?.fontFamily};
  font-size: ${theme.typography[variant]?.fontSize}em;
  font-weight: ${theme.typography[variant]?.fontWeight};
  margin: ${theme.typography[variant]?.margin};
  color: ${theme.typography[variant]?.color};
  text-decoration: ${theme.typography[variant]?.textDecoration};
`
const StyledTypography = styled.div`
  ${(variant) => getStyles(variant)}
`
export function Typography({ variant, children, ...props }) {
  return (
    <StyledTypography as={variant} variant={variant} {...props}>
      {children}
    </StyledTypography>
  )
}

export default Typography
