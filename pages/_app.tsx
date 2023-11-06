import '@/styles/globals.css'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWhitLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWhitLayout) {

  const getLayout = Component.getLayout || ((page) => page)

  // return <Component {...pageProps} />

  return getLayout( <Component {...pageProps} /> )
}
