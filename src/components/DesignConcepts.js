import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";

export function DesignConcepts() {

  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const ref4 = useRef(null)

  const elementsData = [
    {
      className: 'hover:scale-[1.01] duration-300 cursor-grab',
      ref: ref1,
      src: '/img/example-(3).png',
      width: '550',
    },
    {
      className: 'absolute top-44 right-[340px] hover:scale-[1.01] duration-300 cursor-grab',
      ref: ref2,
      src: '/img/example-(1).png',
      width: '370',
    },
    {
      className: 'absolute top-36 right-12 hover:scale-[1.01] duration-300 cursor-grab',
      ref: ref3,
      src: '/img/example-(2).png',
      width: '370',
    },
    {
      className: 'absolute top-12 right-72 hover:scale-[1.01] duration-300 cursor-grab',
      ref: ref4,
      src: '/img/example-(4).png',
      width: '370',
    },
  ]

  return (
    <div className="absolute right-[6%] xl:top-[370px] mt-20 max-md:hidden">
      {
        elementsData.map(({ className, ref, src, width }, index) => (
          <motion.div key={index} className={className} ref={ref}>
            <motion.div drag dragConstraints={ref}>
              <Image
                alt="portfolio-bg"
                src={src}
                width={width}
                height="0"
                quality={100}
                className="pointer-events-none"
              />
            </motion.div>

          </motion.div>
        ))
      }
      <p className="md:mt-52 font-light tracking-tight mix-blend-difference">(Some design concepts I have made
        for
        companies)</p>
    </div>
  )
}