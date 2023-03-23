import Image from "next/image"
import {motion, useScroll, useTransform} from "framer-motion"

export default function Home() {
  const homeImage = {
    objectFit: "cover",
  }

  let {scrollYProgress} = useScroll()
  let y = useTransform(scrollYProgress, [0, 2], ["0%", "-100%"]) //TODO capire se usare scrollY oppure scrollYProgress

  return (
    <>
      <header className="h-screen">
        <Image
          alt="home-bg"
          style={homeImage}
          src="/unsplash_WUtT8cGRPog.png"
          fill
          quality={100}
          priority
        />
        <div className="rotated-text-home float-right text-sm">
          <p className="font-inter font-extralight text-[#BEDBD4] mix-blend-difference">
            Design by Vittorio Gioda - Turin, Italy. 2023
          </p>
        </div>
        <nav
          className="backdrop-blur-md z-10 fixed w-full md:w-fit flex pl-10 py-3 gap-10 font-inter font-extralight text-[#BEDBD4] bg-black md:mix-blend-difference">
          <div>Home</div>
          <div>Technology</div>
          <div>Portfolio</div>
          <div>About</div>
        </nav>
        <motion.div className="pt-72 md:ml-[15%] mx-[10%] w-fit mix-blend-difference" style={{y}}>
          <p className="font-extralight md:text-2xl text-md text-[#BEDBD4]">
            Hi, I&apos;m Vittorio.
          </p>
          <h1 className="md:text-8xl text-5xl font-sulphur text-[#d5ebe7] mix-blend-difference">
            FULL-STACK WEB <br/>STUDENT <br/>AND DEVELOPER
          </h1>
        </motion.div>
      </header>

      <section className="h-screen flex">
        <div className="w-fit mx-auto my-auto text-right">
          <div className="md:text-2xl">
            What I mainly use in my projects
          </div>
          <div className="custom-text-gradient-bg md:text-8xl text-5xl italic font-semibold">
            <div>NEXTJS</div>
            <div>TAILWIND</div>
            <div>EXPRESS</div>
            <div>MYSQL</div>
            <div>SUPABASE</div>
            <div>FRAMER</div>
          </div>
        </div>
      </section>

      <section className="portfolio-section h-screen">
        <div className="">
          <Image
            alt="home-bg"
            src="/unsplash_8xznAGy4HcY.png"
            width={1440}
            height={300}
            quality={100}
          />
        </div>
      </section>

    </>
  )
}
