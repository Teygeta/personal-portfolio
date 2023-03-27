import {Html, Head, Main, NextScript} from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* HTML Meta Tags */}
        <meta name="title" content="Vittorio Gioda's Portfolio"/>
        <meta name="description" content="Hi, I'm Vittorio. FULL-STACK WEB STUDENT AND DEVELOPER"/>
        <meta name="keywords" content="portfolio, personal, developer, student, full-stack, web-developer"/>
        <meta name="robots" content="index, follow"/>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="language" content="English"/>
        <meta name="author" content="Vittorio Gioda"/>
        <meta name="robots" content="noindex,nofollow"/>

        {/* Google */}
        <meta itemProp="name" content="Vittorio Gioda"/>
        <meta itemProp="description" content="Hi, I'm Vittorio. FULL-STACK WEB STUDENT AND DEVELOPER"/>
        <meta itemProp="image"
              content="http://www.vittoriogioda.com/_next/image?url=%2Funsplash_WUtT8cGRPog.png&w=3840&q=100"/>

        {/* Facebook */}
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://www.vittoriogioda.com/"/>
        <meta property="og:title" content="Vittorio Gioda's Portfolio"/>
        <meta property="og:description" content="Hi, I'm Vittorio. FULL-STACK WEB STUDENT AND DEVELOPER"/>
        <meta property="og:image"
              content="http://www.vittoriogioda.com/_next/image?url=%2Funsplash_WUtT8cGRPog.png&w=3840&q=100"></meta>

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="Vittorio Gioda's Portfolio"/>
        <meta name="twitter:description" content="Hi, I'm Vittorio. FULL-STACK WEB STUDENT AND DEVELOPER"/>
        <meta name="twitter:image"
              content="http://www.vittoriogioda.com/_next/image?url=%2Funsplash_WUtT8cGRPog.png&w=3840&q=100"/>

        {/* Links */}
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;600&family=Sulphur+Point:wght@400;700&display=swap"
          /*rimuovere font non utilizzati*/
          rel="stylesheet"/>

      </Head>
      <body>
      <Main/>
      <NextScript/>
      </body>
    </Html>
  )
}
