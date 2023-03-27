import Image from "next/image"
import {motion, useScroll, useTransform} from "framer-motion"
import {Navbar} from "@/components/Nav";

export default function Home() {
  const fitImage = {
    objectFit: "cover",
  }

  let {scrollYProgress} = useScroll()
  let y = useTransform(scrollYProgress, [0, 2], ["0%", "-100%"]) //TODO capire se usare scrollY oppure scrollYProgress

  return (
    <>
      <header className="h-screen relative">
        <Image
          alt="home-bg"
          style={fitImage}
          src="/unsplash_WUtT8cGRPog.png"
          fill
          quality={100}
          priority
        />
        <div className="rotated-text-home float-right text-sm">
          <p className="font-inter font-extralight text-[#BEDBD4] mix-blend-difference ml-10">
            Design by Vittorio Gioda - Turin, Italy. 2023
          </p>
        </div>
        <div>
        </div>
        <Navbar/>
        <motion.div className="pt-72 md:ml-[15%] mx-[10%] w-fit mix-blend-difference" style={{y}}>
          <p className="font-extralight md:text-2xl text-md text-[#BEDBD4] tracking-tighter">
            Hi, I&apos;m Vittorio.
          </p>
          <h1 className="md:text-8xl text-5xl text-[#d5ebe7] font-normal mix-blend-difference tracking-tighter">
            FULL-STACK WEB <br/>STUDENT <br/>AND DEVELOPER
          </h1>
        </motion.div>
      </header>

      <section className="h-[90vh] md:flex">
        <div className="w-fit mx-auto my-auto text-right flex-1 mr-[8%]">
          <div className="font-extralight -tracking-widest md:text-3xl opacity-90">
            what I mainly use in my projects
          </div>
          <div className="custom-text-green-gradient md:text-[80px] text-5xl italic font-semibold">
            <div>NEXTJS</div>
            <div>TAILWIND</div>
            <div>EXPRESS</div>
            <div>MYSQL</div>
            <div>SUPABASE</div>
            <div>FRAMER</div>
          </div>
        </div>
        <div className="max-md:hidden border-[0.5px] border-white opacity-40 my-10"></div>
        <div className="flex-1 my-auto ml-[8%] mr-5">
          <p className="max-w-sm font-light tracking-tight text-xl opacity-90">
            Beginning to study computer programming on my own (2021)
            <br/>
            <br/>
            I enroll in Start2Impact University and follow the path as a Full-Stack Developer (2022 - now)
            <br/>
            <br/>
            I start a training path in a foreign company supported by a Senior Developer who teaches me new skills (Sept
            2022 - Feb 2023)
            <br/>
            <br/>
            I decide to embark on a freelance career path (Now)
          </p>
        </div>
      </section>

      <section className="relative h-screen">
        <Image
          alt="portfolio-bg"
          style={fitImage}
          src="/unsplash_DVzaV16Wcao.png"
          fill
          quality={100}
          className="-z-10"
        />
        <div className="mix-blend-difference pt-80 ml-[20%]">
          <h1 className="text-5xl italic font-bold tracking-tight">PORTFOLIO</h1>
          <p className="text-xl font-light tracking-tight">Some of my personal projects, done to improve my programming
            skills.
            <br/>
            I
            initially
            focused on functionality rather than design.
          </p>
        </div>

      </section>
    </>
  )
}
