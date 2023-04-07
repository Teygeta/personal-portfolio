import { useState } from "react";
import Link from "next/link";

function MobileNav({ open, setOpen }) {

  const links = [
    { href: "#home", name: "Home" },
    { href: "#technology", name: "Technology" },
    { href: "#portfolio", name: "Portfolio" },
    { href: "#about", name: "About" },
  ]


  return (
    <div
      className={
        `z-30 absolute top-0 left-0 w-full bg-black transform ${open ? '-translate-x-0' : 'max-md:-translate-y-full'} 
      transition-transform duration-300 ease-in-out filter
      `}>
      <div
        className="flex max-md:flex-col max-md:justify-center items-center max-md:h-screen gap-10 text-xl font-inter font-extralight text-[#BEDBD4] md:p-5 ">
        {links.map(({ href, name }, index) => (
          <div key={index} onClick={() => setOpen(!open)}>
            <Link href={href} scroll={false}>{name}</Link>
          </div>
        ))}

      </div>
    </div>
  )
}

export function Nav() {

  const [open, setOpen] = useState(false)
  return (
    <nav className="fixed w-screen bg-black z-50">
      <MobileNav open={open} setOpen={setOpen}/>
      <div className="w-11/12 flex justify-end">
        <div
          className="group z-50 relative w-6 py-5 cursor-pointer flex-col justify-between items-center flex gap-2 md:hidden "
          onClick={() => {
            setOpen(!open)
          }}>
          <div
            className={`w-full border border-[#BEDBD4] transform transition duration-300 ${open ? 'rotate-45 translate-y-1.5' : ''}`}></div>
          <div
            className={`w-full border border-[#BEDBD4] transform transition duration-300 ${open ? '-rotate-45 -translate-y-1' : ''}`}></div>
        </div>
      </div>
    </nav>
  )

}
