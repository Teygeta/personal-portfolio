import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";

export function DesignConcepts() {

  const sharedClass = 'hover:scale-[1.01] duration-300 cursor-grab saturate-0 hover:saturate-50 active:saturate-50'

  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const ref4 = useRef(null)

  const elementsData = [
    {
      className: `absolute top-0 right-10 hover:scale-[1.01] duration-300 cursor-grab ${sharedClass}`,
      ref: ref1,
      src: '/img/housema-design.webp',
      width: '250',
    },
    {
      className: `z-10 absolute top-40 right-36 ${sharedClass}`,
      ref: ref2,
      src: '/img/noface-design.webp',
      width: '190',
    },
    {
      className: `absolute top-36 -right-2 hover:scale-[1.01] duration-300 cursor-grab ${sharedClass}`,
      ref: ref3,
      src: '/img/bg-design.webp',
      width: '150',
    },
    {
      className: `z-20 absolute top-12 right-40 hover:scale-[1.01] duration-300 cursor-grab ${sharedClass}`,
      ref: ref4,
      src: '/img/figi-design.webp',
      width: '230',
    },
  ]

  return (
    <div className="max-md:hidden">
      <div className="absolute mr-10 ">
        {elementsData.map(({ className, ref, src, width }, index) => (
          <motion.div key={index} className={className} ref={ref}>
            <motion.div drag dragConstraints={ref}>
              <Image
                alt="design-concept"
                src={src}
                width={width}
                height="0"
                quality={100}
                className="pointer-events-none"
              />
            </motion.div>
          </motion.div>
        ))}
        <p className="md:mt-80 font-light tracking-tight mix-blend-difference">(Some design concepts I have made
          for
          companies)
        </p>
      </div>
    </div>

  )
}