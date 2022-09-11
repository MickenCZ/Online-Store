import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta name="description" content="E-store next.js redux typescript" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="MickenCZ" />
        <meta name="keywords" content="next.js redux typescript" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}