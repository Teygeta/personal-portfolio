import Image from "next/image"
export default function Home() {

  const homeImage = {
    objectFit: "cover",
    zIndex: "-1",
    top: "50px",
  }
  return (
    <>
      <header>
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
        <nav className="fixed flex ml-10 mt-3 gap-10 font-inter font-extralight text-[#BEDBD4] mix-blend-difference">
          <div>Home</div>
          <div>Technology</div>
          <div>Portfolio</div>
          <div>About</div>
        </nav>
        <div className="pt-72 ml-[15%] w-fit">
          <p className="font-inter font-extralight text-2xl text-[#BEDBD4] mix-blend-difference">
            Hi, I&apos;m Vittorio.
          </p>
          <h1 className="text-8xl text-[#d5ebe7] mix-blend-difference">
            FULL-STACK WEB <br />STUDENT <br />AND DEVELOPER
          </h1>
        </div>

      </header>
    </>
  )
}
