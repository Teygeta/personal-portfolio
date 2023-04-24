import { Nav } from '@/components/Nav';
import { Introduction } from '@/components/Introduction';
import { About } from '@/components/About';
import { Optin } from '@/components/Optin';
import { Footer } from '@/components/Footer';
import { Projects } from '@/components/Projects';
import { Background } from '@/components/Background';
import { Layout } from '@/components/Layout';

export default function Home() {
  return (
    <>
      <Nav/>
      <Background/>
      <Layout>
        <Introduction/>
        <About/>
        <Projects/>
        <Optin/>
        <Footer/>
      </Layout>
    </>

  )
}


