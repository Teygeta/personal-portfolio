import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";

export function DesignConcepts() {

  const sharedClass = 'absolute hover:scale-[1.03] duration-300 cursor-grab saturate-0 hover:saturate-50 active:saturate-50'

  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const ref4 = useRef(null)

  // convertire immagini con shadow da figma a png to webp a tinypng
  const elementsData = [
    {
      className: `z-10 ${sharedClass}`,
      ref: ref4,
      src: '/img/Clip-path-group-3 (1).webp',
      width: '230',
    },
    {
      className: `-top-10 left-20 ${sharedClass}`,
      ref: ref1,
      src: '/img/Clip-path-group (1).webp',
      width: '250',
    },
    {
      className: `top-28 left-8 ${sharedClass}`,
      ref: ref2,
      src: '/img/noface-design.webp',
      width: '190',
    },
    {
      className: `top-20 right-0 ${sharedClass}`,
      ref: ref3,
      src: '/img/bg-design.webp',
      width: '150',
    },

  ]

  return (
    <div className="max-md:hidden">
      <div className="flex relative">
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
      </div>
      <p className="font-light tracking-tight mix-blend-difference mt-48">(Concetti di design che ho realizzato
        per
        alcune aziende)
      </p>
    </div>

  )
}