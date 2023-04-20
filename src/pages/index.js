import { Nav } from "@/components/Nav";
import { Introduction } from "@/components/Introduction";
import { About } from "@/components/About";
import { Portfolio } from "@/components/Portfolio";
import { Optin } from "@/components/Optin";
import { Footer } from "@/components/Footer";
import { BenefitsPage } from "@/components/BenefitsPage";

export default function Home() {
  return (
    <>
      <Nav/>
      <Introduction/>
      <BenefitsPage/>
      <Portfolio/>
      {/*<About/>*/}
      <Optin/>
      <Footer/>
    </>
  )
}


