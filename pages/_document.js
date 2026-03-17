import { Html, Head, Main, NextScript } from 'next/document'
import '../styles/globals.css'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="The Prosthetics and Orthotics Podcast - Deep dive into 3D printing and additive manufacturing for prosthetics and orthotics" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
