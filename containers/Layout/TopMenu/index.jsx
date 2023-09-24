import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import { css } from '@emotion/react'
import Link from 'next/link'
import { List } from '@phosphor-icons/react'

import routes from 'routes'
import Cart from 'containers/Layout/Cart'
import Auth from 'containers/Auth'

const styles = css`
  position: fixed;
  z-index: 9;
  top: 0;
  background-color: purple;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    &.main-menu {
      li {
        &:first-of-type {
          display: none;
          a {
            line-height: 20px;
          }
        }
        float: left;
        a {
          line-height: 24px;
          color: white;
          text-decoration: none;
          padding: 5px 10px;
          border-radius: 5px;
          margin-right: 5px;
          &:hover,
          &.active {
            background-color: white;
            color: #333;
          }
        }
      }
    }
    &.right-menu {
      li {
        float: right;
        a {
          line-height: 24px;
          color: white;
          text-decoration: none;
          padding: 5px 10px;
          border-radius: 5px;
          margin-right: 5px;
          &:hover,
          &.active {
            background-color: white;
            color: #333;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 500px) {
    .main-menu {
      width: calc(100% - 100px);
      li {
        float: none !important;
      }
      li:first-of-type {
        display: block !important;
        button {
          background-color: transparent;
          border: none;
          padding: 5px;
          margin: -5px 5px;
          cursor: pointer;
          &:hover {
            background-color: #ffffff20;
          }
        }
      }
      li:not(:first-of-type) {
        display: none;
      }
      &.open {
        li:not(:first-of-type) {
          display: block;
          margin: 2.5px 0;
          a {
            width: 100%;
            display: block;
            box-sizing: border-box;
          }
        }
      }
    }
  }
`

export function TopMenu() {
  const currentPath = usePathname()
  const [open, setOpen] = useState(false)
  const toggleMenu = () => setOpen(!open)
  return (
    <div css={styles}>
      <ul className={`main-menu ${open ? 'open' : ''}`}>
        <li>
          <button
            type="button"
            onClick={(e) => {
              toggleMenu()
              e.preventDefault()
            }}
          >
            <List size={20} color="white" />
          </button>
        </li>
        {routes.map((route) => (
          <li key={route.path}>
            <Link
              href={route.path}
              onClick={toggleMenu}
              className={currentPath === route.path ? 'active' : ''}
            >
              {route.title}
            </Link>
          </li>
        ))}
      </ul>
      <ul className="right-menu">
        <li>
          <Cart />
        </li>
        <li>
          <Auth />
        </li>
      </ul>
    </div>
  )
}

export default TopMenu
