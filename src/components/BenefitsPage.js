function Benefit({ title, description, haveSeparator }) {

  return (
    <>
      <div className="max-md:text-center max-w-5xl mx-auto">
        <div className="mx-[5%] md:flex">
          <h2 className="custom-text-black-green-gradient text-xl font-bold md:text-3xl md:flex-1">{title}</h2>
          <p
            className="mx-auto max-md:max-w-sm max-md:mt-3 md:mb-5 md:text-xl font-light md:flex-1">{description}</p>
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
        className=" font-medium mb-20 mx-auto px-[5%] max-w-sm italic text-center text-2xl md:text-5xl md:max-w-6xl">PERCHE’
        E’
        IMPORTANTE
        POSSEDERE UN
        SITO WEB
        PROFESSIONALE?</h1>

      <Benefit
        title="PIU’ VISIBILITA’"
        description="Grazie al sito web, l'azienda può essere facilmente trovata dagli utenti su internet,
        aumentando la propria
        visibilità e raggiungendo un pubblico sempre più ampio."
        haveSeparator
      />

      <Benefit
        title="NUOVI CLIENTI’"
        description="Un sito web ben fatto può attirare nuovi clienti, che possono venire a conoscenza dell'azienda e dei suoi prodotti/servizi tramite il sito stesso."
        haveSeparator
      />
      <Benefit
        title="PIU’ VENDITE’"
        description="Grazie alla maggiore visibilità e alla possibilità di raggiungere un pubblico sempre più vasto, un sito web può contribuire ad aumentare le vendite dell'azienda, trasformando i visitatori in clienti effettivi."
        haveSeparator
      />
      <Benefit
        title="CREDIBILITA’"
        description="Avere un sito web professionale e ben curato aumenta la credibilità dell'azienda agli occhi dei potenziali clienti, trasmettendo l'immagine di un'impresa seria e professionale."
        haveSeparator
      />
      <Benefit
        title="COMPETITIVITA’"
        description="Con un sito web professionale ed efficace, l'azienda può conferire a sé stessa un vantaggio competitivo rispetto ai concorrenti, permettendole di distinguersi e di offrire ai clienti un'esperienza online positiva e di alta qualità."
      />


    </section>
  )
}