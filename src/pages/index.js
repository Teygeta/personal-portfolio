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
      <div className="max-md:absolute max-md:top-14 w-screen text-center max-md:text-xs">SITO IN FASE DI SVILUPPO</div>
      <Nav/>
      <Introduction/>
      <BenefitsPage/>
      <Portfolio/>
      <About/>
      <Optin/>
      <Footer/>
    </>
  )
}


