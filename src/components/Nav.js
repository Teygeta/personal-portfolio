export function Navbar() {

  return (
    <nav className="max-md:bg-black md:backdrop-blur-md md:mix-blend-difference w-full z-10 fixed">
      <div className="md:w-fit md:py-3 p-8 font-inter font-extralight text-[#BEDBD4]">
        <div className="flex gap-10 max-md:hidden">
          <div>Home</div>
          <div>Technology</div>
          <div>Portfolio</div>
          <div>About</div>
        </div>
        <div className="float-right md:hidden">
          <div className=" border-[1px] border-[#BEDBD4] w-7 mb-2 -mt-1"></div>
          <div className=" border-[1px] border-[#BEDBD4] w-7"></div>
        </div>
      </div>
    </nav>
  )
}
