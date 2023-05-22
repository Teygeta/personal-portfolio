import { Layout } from '@/components/Layout'
import { Analytics } from '@vercel/analytics/react';
import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Vittorio Gioda</title>
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </Layout>

  )
}
