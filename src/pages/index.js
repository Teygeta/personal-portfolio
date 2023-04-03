import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Navbar } from "@/components/Nav";
import { useRef, useState } from "react";
import { SpinnerLoader } from "@/components/SpinnerLoader";
import { DesignConcepts } from "@/components/DesignConcepts";

export default function Home() {

  const ref = useRef(null)

  // FRAMER MOTION
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 2], ["0%", "-100%"])

  //SPINNER-IMAGE LOGIC
  //TODO correggere
  const [imageLoaded, setImageLoaded] = useState(false);
  const handleImageLoad = () => {
    setImageLoaded(true);
    console.log("Image Loaded")
  };

  return (
    <>
      <SpinnerLoader imageLoaded={imageLoaded}/>
      <Navbar/>
      <header id="home" className="h-screen relative">
        <Image
          alt="home-bg"
          style={{ objectFit: "cover" }}
          src="/img/primopiano-prova.png"
          fill
          quality={100}
          priority
        />
        <div className="rotated-text-home float-right text-sm">
          <p className="font-extralight text-[#BEDBD4] mix-blend-difference ml-10">
            Design by Vittorio Gioda - Turin, Italy. 2023
          </p>
        </div>
        <div>
        </div>
        <motion.div className="pt-72 md:ml-[15%] mx-[10%] w-fit mix-blend-difference" style={{ y }}>
          <p className="font-extralight md:text-2xl text-md text-[#BEDBD4]">
            Hi, I&apos;m Vittorio.
          </p>
          <h1 className="md:text-8xl text-5xl text-[#d5ebe7] custom-text-lightgreen-gradient mb-10">
            FULL-STACK WEB <br/>STUDENT <br/>AND DEVELOPER
          </h1>
          <button className="custom-button">
            Get In Touch
          </button>
        </motion.div>
      </header>
      <section id="technology" className="max-md:h-[90vh] h-screen md:flex relative">
        <Image
          alt="technology-bg"
          style={{ objectFit: "cover", opacity: 0.5 }}
          src="/img/unsplash_WUtT8cGRPog.png"
          fill
          quality={100}
          className="-z-10"
          priority
        />
        <div ref={ref} className="w-fit mx-auto my-auto text-right flex-1 mr-[10%]">
          <div className="custom-text-black-gradient font-extralight md:text-3xl opacity-90">
            what I mainly use in my projects
          </div>
          <ul className=" custom-text-green-gradient md:text-[80px] text-5xl italic font-semibold">
            <li>NEXTJS</li>
            <li>TAILWIND</li>
            <li>EXPRESS</li>
            <li>MYSQL</li>
            <li>SUPABASE</li>
            <li>FRAMER</li>
          </ul>
        </div>
        <div className="max-md:hidden border-[0.5px] border-white opacity-40 my-10"></div>
        <div className="flex-1 my-auto ml-[10%] mr-5">
          <p className="max-w-xs font-extralight tracking-tight text-xl opacity-90">
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
      <section id="portfolio" className="relative h-screen">
        <Image
          alt="portfolio-bg"
          style={{ objectFit: "cover" }}
          src="/img/unsplash_DVzaV16Wcao.png"
          fill
          quality={100}
          className="-z-10"
          onLoad={handleImageLoad}
          priority
        />

        <motion.div className="mix-blend-difference pt-[34rem]" style={{ y }}>
          <h1 className="custom-transparent-text-border">PORTFOLIO</h1>
          <h1 className="text-5xl italic font-bold tracking-tight">PORTFOLIO</h1>
          <p className="text-xl font-light tracking-tight">Some of my personal projects, done to improve my programming
            skills.
            <br/>
            I
            initially
            focused on functionality rather than design.
          </p>
        </motion.div>
        <div className="relative">
          <p className="mix-blend-difference text-2xl">Take a look at my profiles</p>
          <button className="custom-button w-52">GitHub</button>
          <br/>
          <button className="custom-button w-52">Start2Impact</button>
          <DesignConcepts/>
        </div>
      </section>
    </>
  )
}


