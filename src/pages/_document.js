import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* HTML Meta Tags */}
        <meta name="title" content="Vittorio Gioda's Portfolio"/>
        <meta name="description"
              content="Hi, I'm Vittorio. FULL-STACK WEB STUDENT AND DEVELOPER. I develop yes web, study the best communication method and create eye-catching designs "/>
        <meta name="keywords" content="portfolio, personal, developer, student, full-stack, web-developer"/>
        <meta name="keywords" content="designer, work, development, restyling, design"/>
        <meta name="robots" content="index, follow"/>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="language" content="English"/>
        <meta name="author" content="Vittorio Gioda"/>

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

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100;0,200;0,300;0,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"/>

      </Head>
      <body>
      <Main/>
      <NextScript/>
      </body>
    </Html>
  )
}
