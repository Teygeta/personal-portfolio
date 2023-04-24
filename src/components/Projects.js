import { SectionIntro } from '@/components/SectionIntro';

function ProjectCard({ title, description, technology }) {
  return (
    <div className="pt-20 md:pt-32 mx-auto max-w-2xl">
      <h1 className="text-xl md:text-3xl font-bold mb-5 ml-4">{title}</h1>
      <p className="px-7 pt-7 pb-20 rounded-md bg-[#181818]">{description}</p>
      <div className="text-md mt-3 ml-4 opacity-70 font-mono">{technology}</div>
    </div>
  )
}

export function Projects() {
  const projects = [
    { title: 'Nome Progetto', description: 'Descrizione del progetto...', technology: 'NextJS Redux' },
  ]
  return (
    <section id="projects" className="md:pt-72">
      <SectionIntro title="Alcuni progetti">
        <p>
          Durante il mio percorso di formazione, ho completato diversi progetti per mettere in pratica le conoscenze
          acquisite e verificare le mie competenze.
        </p>
        <p>(Di seguito pubblicherò presto i dettagli sui progetti)</p>
      </SectionIntro>
      {
        projects.map(({ title, description, technology }, index) => (
          <ProjectCard
            key={index}
            title={title}
            description={description}
            technology={technology}
          />
        ))
      }
      <p className="text-center pt-28 pb-10 md:pt-32 md:pb-20">Nel frattempo, puoi dare un’occhiata al mio profilo su
        GitHub
      </p>
      <div className="w-fit mx-auto">
        <a target="_blank" href="https://github.com/Teygeta">
          <button className="custom-button">GitHub</button>
        </a>
      </div>

    </section>
  )
}