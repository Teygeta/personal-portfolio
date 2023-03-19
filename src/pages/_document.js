import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="title" content="Vittorio Gioda's portfolio" />
        <meta name="description" content="Hi, I'm Vittorio. FULL-STACK WEB STUDENT AND DEVELOPER" />
        <meta name="keywords" content="portfolio, personal, developer, student, full-stack, web-developer" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Vittorio Gioda" />
        <meta name="robots" content="noindex,nofollow" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;600&family=Sulphur+Point:wght@400;700&display=swap" rel="stylesheet" />      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
