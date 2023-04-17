export function Optin() {

  return (
    <section id="contacts" className="pb-32 relative">
      <svg width="100%" height="100%" viewBox="0 0 393 175" fill="none" xmlns="http://www.w3.org/2000/svg"
           className="w-full object-cover absolute -top-52 -z-20">
        <path
          d="M420 0.5L355.126 97.3997C354.694 98.0456 354.187 98.639 353.618 99.1677V99.1677C348.245 104.153 339.513 101.861 337.281 94.8806L329.317 69.9745C323.951 53.1938 304.059 46.1585 289.336 55.8344L229.128 95.4028L207.794 112.08C185.174 129.764 153.844 131.206 129.694 115.677V115.677C102.895 98.4432 67.6957 102.291 45.2525 124.907L-3.73285 174.27"
          stroke="#26312E" strokeOpacity="0.37"/>
        <path
          d="M419.866 7.99988L347.813 97.7841C347.499 98.1754 347.157 98.5432 346.789 98.8845V98.8845C341.275 104.001 332.312 101.649 330.02 94.484L322.183 69.9745C316.817 53.1938 296.925 46.1586 282.202 55.8344L221.994 95.4028L200.66 112.08C178.04 129.764 146.71 131.206 122.56 115.677V115.677C95.7614 98.4432 60.5621 102.291 38.1189 124.907L-10.8665 174.27"
          stroke="#26312E" strokeOpacity="0.55"/>
        <path
          d="M417.5 14.5L340.208 98.3719V98.3719C334.437 103.727 325.055 101.266 322.657 93.7662L315.05 69.9745C309.684 53.1938 289.792 46.1585 275.069 55.8344L214.861 95.4028L193.527 112.08C170.907 129.764 139.577 131.206 115.427 115.677V115.677C88.6279 98.4432 53.4285 102.291 30.9854 124.907L-18 174.27"
          stroke="#26312E"/>
      </svg>
      <div className="pt-32">
        <h1 className="text-center text-3xl text-[#BEDBD4] italic">Prenota una chiamata
          gratuita per chiarire ogni dubbio</h1>
        <div className="w-full mt-20 md:flex">
          <a href="#" className="mx-auto">
            <button className="custom-button w-36 max-md:mb-14">Prenota ora</button>
          </a>
          <a href="#home" className="mx-auto">
            <button className="custom-button w-36 bg-[#BEDBD4]"><p className="mix-blend-difference">Torna
              alla Home</p>
            </button>
          </a>
        </div>
      </div>

    </section>
  )
}