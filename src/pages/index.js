import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

export default function Home() {
  const homeImage = {
    objectFit: "cover",
    zIndex: "-1",
  }

  let { scrollYProgress } = useScroll()
  let y = useTransform(scrollYProgress, [0, 2], ["0%", "-100%"]) //TODO capire se usare scrollY oppure scrollYProgress

  return (
    <>
      <header className="h-screen">
        <div className="h-fit">
          <Image
            alt="home-bg"
            style={homeImage}
            src="/unsplash_WUtT8cGRPog.png"
            fill
            quality={100}
            priority
          />
          <div className="rotated-text-home absolute top-[220px] -right-[305px]">
            <p className="font-inter font-extralight text-[#BEDBD4] mix-blend-difference">
              Design by Vittorio Gioda - Turin, Italy. 2023
            </p>
          </div>
        </div>
        {/* TODO fare navbar con sfondo nero quando scrollo in su */}
        <nav className="backdrop-blur-md z-20 fixed w-full flex pl-10 py-3 gap-10 font-inter font-extralight text-[#BEDBD4] mix-blend-difference">
          <div>Home</div>
          <div>Technology</div>
          <div>Portfolio</div>
          <div>About</div>
        </nav>
        <motion.div className="pt-72 ml-[15%] w-fit mix-blend-difference" style={{ y }}>
          <p className="font-extralight text-2xl text-[#BEDBD4]">
            Hi, I&apos;m Vittorio.
          </p>
          <h1 className="text-8xl font-sulphur text-[#d5ebe7] mix-blend-difference">
            FULL-STACK WEB <br />STUDENT <br />AND DEVELOPER
          </h1>
        </motion.div>
      </header>
      <motion.section style={{ y }} className="h-screen relative">
        <div className="z-30 text-right absolute top-1/2 right-1/2 translate-x-1/2">
          <div className="text-2xl font-extralight">
            What I mainly use in my projects
          </div>
          <div className="custom-text-gradient-bg text-8xl italic font-semibold">
            <div>NEXTJS</div>
            <div>TAILWIND</div>
            <div>EXPRESS</div>
            <div>MYSQL</div>
            <div>SUPABASE</div>
            <div>FRAMER</div>
          </div>
        </div>
      </motion.section>
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
