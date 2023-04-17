function Benefit({ children, title, haveSeparator }) {

  return (
    <>
      <div className="max-md:text-center max-w-5xl mx-auto">
        <div className="mx-[5%] md:flex">
          <h2 className="custom-text-black-green-gradient text-xl font-bold md:text-3xl md:flex-1">{title}</h2>
          <div
            className="mx-auto max-md:max-w-sm max-md:mt-3 md:mb-5 md:text-xl font-light md:flex-1">
            {children}
          </div>
        </div>
        {!haveSeparator
          ? null
          : <div className="border-b border-b-gray-500 mx-[13%] md:mx-[3%] my-10"></div>}
      </div>
    </>

  )
}

export function BenefitsPage() {

  return (
    <section id="benefits" className="benefits-section py-16">
      <h1
        className="font-medium mb-40 mt-20 mx-auto px-[5%] max-w-sm italic text-center text-2xl max-md:font-bold md:text-5xl md:max-w-6xl">PERCHE’
        E’
        IMPORTANTE
        POSSEDERE UN
        SITO WEB
        PROFESSIONALE?</h1>

      <Benefit
        title="PIU’ VISIBILITA’"
        haveSeparator
      >
        <p>Grazie al sito web, l&apos;azienda può essere <span className="font-bold">facilmente trovata</span> dagli
          utenti su internet, <span className="font-bold">aumentando la propria
          visibilità</span> e raggiungendo un pubblico sempre più ampio.</p>
      </Benefit>

      <Benefit
        title="NUOVI CLIENTI’"
        haveSeparator
      >
        <p>
          Un sito web ben fatto può <span className="font-bold">attirare nuovi clienti</span>, che possono venire a
          conoscenza dell&apos;azienda e dei suoi
          prodotti/servizi tramite il sito stesso.
        </p>
      </Benefit>
      <Benefit
        title="PIU’ VENDITE’"
        haveSeparator
      >
        <p>
          Grazie alla maggiore visibilità e alla possibilità di raggiungere un pubblico sempre più vasto, un sito web
          può contribuire ad <span className="font-bold">aumentare le vendite</span> dell&apos;azienda, <span
          className="font-bold">trasformando i visitatori in clienti</span> effettivi.
        </p>
      </Benefit>
      <Benefit
        title="CREDIBILITA’"
        haveSeparator
      >
        <p>
          Avere un sito web professionale e ben curato <span
          className="font-bold">aumenta la credibilità</span> dell&apos;azienda agli occhi dei potenziali
          clienti, trasmettendo l&apos;immagine di un&apos;impresa seria e professionale.
        </p>
      </Benefit>
      <Benefit
        title="COMPETITIVITA’"
      >
        <p>
          Con un sito web professionale ed efficace, l&apos;azienda può conferire a sé stessa un <span
          className="font-bold">vantaggio competitivo </span>
          rispetto ai concorrenti, permettendole di <span className="font-bold">distinguersi</span> e di offrire ai
          clienti un&apos;esperienza online positiva e
          di alta qualità.
        </p>
      </Benefit>
      <div className="text-center mt-32">
        <p className="max-w-5xl mx-auto">Potrei scrivere una frase che spiega come io posso offrire un sito web
          professionale
          ad
          alte performance per
          migliorare la propria attività
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at commodi consequatur deserunt dolore
          ducimus eaque excepturi expedita itaque magnam maiores numquam, quibusdam repellat, sequi sunt ullam velit
          veniam voluptatibus.</p>
        <div className="w-full mt-20 md:flex">
          <button className="custom-button mx-auto max-md:mb-14">Get In Touch</button>
          <button className="custom-button mx-auto bg-[#BEDBD4]"><p className="mix-blend-difference">Hire Me
            Now</p>
          </button>
        </div>
      </div>

    </section>
  )
}