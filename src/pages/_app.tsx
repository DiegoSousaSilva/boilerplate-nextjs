import { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'styles/global'
function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Boilerplate NextJS</title>
        <link ref="shortcut icon" href="/img/icon-512.png" />
        <link ref="apple-touch-icon" href="/img/icon-512.png" />
        <meta
          name="description"
          content="Projeto com Typescript, React, NextJS, Styled Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
