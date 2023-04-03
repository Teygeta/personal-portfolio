import Image from "next/image";
import { DesignConcepts } from "@/components/DesignConcepts";
import { useRef } from "react";
import { motion } from "framer-motion";

export function Portfolio() {

  const constraintsRef = useRef(null);
  
  return (
    <section id="portfolio" className="relative md:h-screen">
      <Image
        alt="portfolio-bg"
        style={{ objectFit: "cover" }}
        src="/img/unsplash_DVzaV16Wcao.png"
        fill
        quality={100}
        className="-z-10"
        // onLoad={handleImageLoad}
        priority
      />

      <div className="mix-blend-difference pt-36 pl-[15%]">
        <h1 className="custom-transparent-text-bordered absolute top-8 left-[10%]">PORTFOLIO</h1>
        <h1 className="text-5xl italic font-bold tracking-tight">PORTFOLIO</h1>
        <p className="text-xl font-light tracking-tight">Some of my personal projects, done to improve my programming
          skills.
          <br/>
          I
          initially
          focused on functionality rather than design.
        </p>
      </div>
      <div className="mt-72 ml-[20%]">
        <p className="mix-blend-difference text-2xl">Take a look at my profiles</p>
        <button className="custom-button w-52">GitHub</button>
        <br/>
        <button className="custom-button w-52">Start2Impact</button>


        <DesignConcepts/>
      </div>

    </section>
  )
}