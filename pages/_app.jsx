import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { Provider } from 'react-redux'
import App from 'next/app'
import Cookies from 'universal-cookie'

import Layout from 'containers/Layout'
import theme from 'theme'
import { store } from 'store'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  )
}

MyApp.getInitialProps = async (appContext) => {
  let cookies = {}
  if (appContext.ctx.req) {
    cookies = new Cookies(appContext.ctx.req.headers.cookie)
  } else {
    cookies = new Cookies(null, { path: '/' })
  }
  const pageProps = await App.getInitialProps({
    ...appContext,
    ctx: { ...appContext.ctx, reduxStore: store },
    auth: cookies.get('auth'),
  })
  return {
    ...pageProps,
  }
}

export default MyApp
