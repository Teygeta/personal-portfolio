import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";

export function DesignConcepts({ className }) {
  const constraintsRef1 = useRef(null);
  const constraintsRef2 = useRef(null);
  const constraintsRef3 = useRef(null);
  const constraintsRef4 = useRef(null);

  return (
    <div className="absolute right-[6%] xl:top-[370px] mt-20 max-md:hidden">
      <motion.div className='hover:scale-[1.01] duration-300 cursor-grab' ref={constraintsRef1}>
        <motion.div drag dragConstraints={constraintsRef1}>
          <Image
            alt="portfolio-bg"
            src='/img/example-(3).png'
            width="550"
            height="0"
            quality={100}
            className="pointer-events-none"
          />
        </motion.div>

      </motion.div>

      <motion.div className='absolute top-44 right-[340px] hover:scale-[1.01] duration-300 cursor-grab'
                  ref={constraintsRef2}>
        <motion.div drag dragConstraints={constraintsRef2}>
          <Image
            alt="portfolio-bg"
            src='/img/example-(1).png'
            width="370"
            height="0"
            quality={100}
            className="pointer-events-none"
          />
        </motion.div>
      </motion.div>

      <motion.div className='absolute top-36 right-12 hover:scale-[1.01] duration-300 cursor-grab'
                  ref={constraintsRef3}>
        <motion.div drag dragConstraints={constraintsRef3}>
          <Image
            alt="portfolio-bg"
            src='/img/example-(2).png'
            width="370"
            height="0"
            quality={100}
            className="pointer-events-none"
          />
        </motion.div>
      </motion.div>

      <motion.div className='absolute top-12 right-72 hover:scale-[1.01] duration-300 cursor-grab'
                  ref={constraintsRef4}>
        <motion.div drag dragConstraints={constraintsRef4}>
          <Image
            alt="portfolio-bg"
            src='/img/example-(4).png'
            width="370"
            height="0"
            quality={100}
            className="pointer-events-none"
          />
        </motion.div>
      </motion.div>

      <p className="md:mt-52 font-light tracking-tight mix-blend-difference">(Some design concepts I have made for
        companies)</p>
    </div>


  )
}