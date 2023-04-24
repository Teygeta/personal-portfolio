import { useState } from 'react';

function MobileNav({ open, setOpen }) {

  const links = [
    { href: '#home', name: 'Home' },
    { href: '#about', name: 'Su di Me' },
    // { href: "#about", name: "Altro" },
    { href: '#projects', name: 'Progetti' },
    { href: '#contacts', name: 'Contatti' },
  ]


  return (
    <div className={
      `z-30 absolute top-0 left-0 w-full bg-black transform ${open ? '-translate-x-0' : 'max-md:-translate-y-full'} 
      transition-transform duration-300 ease-in-out filter`}>
      <div
        className="flex max-md:flex-col max-md:justify-center items-center text-lg max-md:h-screen gap-10 font-inter font-extralight text-custom-light-green md:py-4 px-6">
        <div className="flex gap-10 max-md:flex-col text-center">
          {links.map(({ href, name }, index) => (
            <div
              key={index}
              onClick={() => setOpen(!open)}
            >
              <a className="hover:text-white duration-300" href={href}>{name}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 w-screen bg-black z-50">
      <MobileNav open={open} setOpen={setOpen}/>
      <div className="w-11/12 flex justify-end">
        <div
          className="group z-50 relative w-6 py-7 cursor-pointer flex-col justify-between items-center flex gap-2 md:hidden "
          onClick={() => {
            setOpen(!open)
          }}>
          <div
            className={`w-full border border-custom-light-green transform transition duration-300 ${open ? 'rotate-45 translate-y-1.5' : ''}`}></div>
          <div
            className={`w-full border border-custom-light-green transform transition duration-300 ${open ? '-rotate-45 -translate-y-1' : ''}`}></div>
        </div>
      </div>
    </nav>
  )
}
