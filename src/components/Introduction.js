import Image from "next/image";

export function Introduction() {

  return (
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
      <div className="pt-72 md:ml-[15%] mx-[10%] w-fit mix-blend-difference">
        <p className="font-extralight md:text-2xl text-md text-[#BEDBD4]">
          Hi, I&apos;m Vittorio.
        </p>
        <h1 className="md:text-8xl text-5xl text-[#d5ebe7] custom-text-lightgreen-gradient mb-10">
          FULL-STACK WEB <br/>STUDENT <br/>AND DEVELOPER
        </h1>
        <button className="custom-button">
          Get In Touch
        </button>
      </div>
    </header>
  )
}