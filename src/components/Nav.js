import Link from "next/link";

export function Navbar() {

  //TODO rifare bene la navbar

  const links = [
    { href: "#home", name: "Home" },
    { href: "#technology", name: "Technology" },
    { href: "#portfolio", name: "Portfolio" },
    { href: "#about", name: "About" },
  ]
  return (
    <nav className="max-md:bg-black md:backdrop-blur-md md:mix-blend-difference w-full z-10 fixed">
      <div className="md:w-fit md:py-3 p-8 font-inter font-extralight text-[#BEDBD4]">
        <div className="flex gap-10 max-md:hidden">
          {links.map(({ href, name }) => (
            <Link key={name} href={href} scroll={false}>{name}</Link>
          ))}

        </div>
        <div className="float-right md:hidden">
          <div className=" border border-[#BEDBD4] w-7 mb-2 -mt-1"></div>
          <div className=" border border-[#BEDBD4] w-7"></div>
        </div>
      </div>
    </nav>
  )
}
