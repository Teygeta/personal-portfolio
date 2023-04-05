import Image from "next/image";

export function Introduction() {

  return (
    <header id="home" className="md:h-screen relative">
      <Image
        alt="home-bg"
        style={{ objectFit: "cover" }}
        src=""
        fill
        quality={100}
        priority
      />
      <svg width="100%" viewBox="0 0 393 158" fill="none" xmlns="http://www.w3.org/2000/svg"
           className="w-full absolute object-cover mt-10">
        <path
          d="M-13 157L55.1662 72.2224C55.4639 71.8522 55.7883 71.5042 56.1369 71.1814V71.1814C61.3575 66.3464 69.8329 68.5723 72.0039 75.3487L79.414 98.4774C84.494 114.333 103.288 120.984 117.21 111.852L174.2 74.4699L194.378 58.7261C215.789 42.0202 245.416 40.6569 268.271 55.3258V55.3258C293.635 71.6056 326.924 67.9684 348.174 46.5952L394.502 0"
          stroke="#26312E" strokeOpacity="0.17"/>
        <path
          d="M-6.2511 157L61.9151 72.2224C62.2128 71.8522 62.5372 71.5042 62.8858 71.1814V71.1814C68.1064 66.3464 76.5818 68.5723 78.7528 75.3487L86.1629 98.4774C91.2429 114.333 110.037 120.984 123.959 111.852L180.949 74.4699L201.127 58.7261C222.538 42.0202 252.165 40.6569 275.02 55.3258V55.3258C300.384 71.6056 333.673 67.9684 354.923 46.5952L401.251 0"
          stroke="#26312E" strokeOpacity="0.35"/>
        <path
          d="M0.497681 157L68.6639 72.2224C68.9616 71.8522 69.286 71.5042 69.6346 71.1814V71.1814C74.8551 66.3464 83.3305 68.5723 85.5016 75.3487L92.9116 98.4774C97.9917 114.333 116.786 120.984 130.708 111.852L187.698 74.4699L207.876 58.7261C229.287 42.0202 258.914 40.6569 281.768 55.3258V55.3258C307.133 71.6056 340.421 67.9684 361.672 46.5952L408 0"
          stroke="#26312E" strokeOpacity="0.55"/>
      </svg>
      <div className="rotated-text-home float-right">
        <p className="font-thin text-[#BEDBD4] text-xs md:text-sm mix-blend-difference">
          Design by Vittorio Gioda - Turin, Italy. 2023
        </p>
      </div>
      <div>
      </div>
      <div className="pt-48 max-w-xs md:pt-72 md:ml-[15%] mx-[10%] w-fit mb-32">
        <p className="font-extralight md:text-2xl text-md text-[#BEDBD4]">
          Hi, I&apos;m Vittorio.
        </p>
        <h1 className="md:text-8xl text-4xl text-[#d5ebe7] custom-text-lightgreen-gradient mb-5">
          FULL-STACK WEB <br/>STUDENT <br/>AND DEVELOPER
        </h1>
        <button className="custom-button ">
          Get In Touch
        </button>
      </div>
    </header>
  )
}