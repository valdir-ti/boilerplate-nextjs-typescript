import Head from 'next/head'
import type { AppProps } from 'next/app'
import GlobalStyle from 'styles/globalStyles'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>CodeStream | Tecnologia</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default App
