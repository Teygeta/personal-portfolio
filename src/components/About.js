import { SectionIntro } from '@/components/SectionIntro';

export function About() {


  const training = [
    'Inizio a studiare  programmazione informatica  autonomamente (Ottobre2021)',
    'Mi iscrivo alla Start2Impact University e seguo il percorso come Full-Stack Developer (Gennaio2022)',
    'Inizio un percorso di formazione in un\'azienda estera, affiancato da un Senior Developer che mi insegna nuove competenze (Agosto2022)',
    'Decido di intraprendere un percorso professionale come freelance (Febbraio2023)'
  ]

  const technologies = [
    { title: 'NEXTJS', link: 'https://nextjs.org/' },
    { title: 'NUXTJS', link: 'https://nuxt.com/' },
    { title: 'TAILWIND', link: 'https://tailwindcss.com/' },
    { title: 'EXPRESS', link: 'https://expressjs.com/' },
    { title: 'SUPABASE', link: 'https://supabase.com/' },
    { title: 'FRAMER', link: 'https://www.framer.com/motion/' },
  ]
  return (
    <section id="about" className="relative pt-20 md:pt-52">
      <SectionIntro title="Su di me">
        <p>
          Il mio interesse per lo <i>sviluppo web</i> è nato nel 2021, spinto dalla tipica
          insoddisfazione che si prova quando
          si svolge un lavoro che non si ama. <br />
          Oggi, ho avuto l`&apos;opportunità di conoscere svariati professionisti del settore e di formarmi abbastanza
          da
          poter
          decidere di intraprendere una carriera come libero professionista. In sostanza, questo è il mio attuale,
          piccolo
          percorso:
        </p>
      </SectionIntro>
      <div className="mt-28 lg:flex lg:justify-center lg:items-center">
        <ul className="text-center lg:text-right">
          {
            training.map((i, index) => (
              <li key={index}><p className="mb-8 max-w-xs max-lg:mx-auto italic">{i}</p></li>
            ))
          }
        </ul>
        <div className="max-lg:hidden border-l opacity-70 h-[400px] mx-20"></div>
        <div className="max-lg:text-center max-lg:my-32">
          <p className="custom-text-black-gradient md:ml-4">
            tecnologie che uso maggiormente
          </p>
          <ul className="text-5xl md:text-7xl italic font-semibold">
            {
              technologies.map(({ title, link }, index) => (
                <li key={index}
                  className="-my-1 ml-3 custom-text-green-black-gradient transition hover:scale-95 hover:duration-200">
                  <a
                    href={link} target="_blank">{title}</a></li>
              ))
            }
          </ul>
        </div>
      </div>
    </section>
  )
}