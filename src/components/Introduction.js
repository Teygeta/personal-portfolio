export function Introduction() {

  return (
    <header id="home" className="h-screen relative">
      <div className="h-screen flex justify-center max-md:pt-28 md:items-center">
        <div>
          <p className="italic text-custom-light-green">
            Ciao, sono Vittorio
          </p>
          <h1 className="custom-text-lightgreen-gradient font-medium text-[#d5ebe7] text-4xl sm:text-5xl md:text-7xl">
            SVILUPPATORE <br/> E DESIGNER WEB
          </h1>
          <div className="w-10 border-t my-5 opacity-70"></div>
          <p className="mb-10 max-w-3xl">
            Creo <i>siti web </i>
            ad <span className="font-semibold">alte performance</span>,
            con un <span className="font-semibold">design accattivante </span>
            ed una<span className="font-semibold"> comunicazione efficace</span>.
          </p>
          <div className="w-fit">
            <a href="#contacts">
              <button className="custom-button">Collaboriamo</button>
            </a>
          </div>
        </div>
      </div>
      <svg className="mx-auto mb-4 w-full absolute bottom-16 md:bottom-0" width="8" height="56"
           viewBox="0 0 8 56"
           fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3.64645 55.3536C3.84171 55.5488 4.15829 55.5488 4.35355 55.3536L7.53553 52.1716C7.7308 51.9763 7.7308 51.6597 7.53553 51.4645C7.34027 51.2692 7.02369 51.2692 6.82843 51.4645L4 54.2929L1.17157 51.4645C0.976311 51.2692 0.659728 51.2692 0.464466 51.4645C0.269204 51.6597 0.269204 51.9763 0.464466 52.1716L3.64645 55.3536ZM3.5 0L3.5 55H4.5L4.5 0L3.5 0Z"
          fill="#797979"/>
      </svg>
    </header>
  )
}