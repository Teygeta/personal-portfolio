import Image from "next/image";

export function Technology() {

  const technologies = ["NEXTJS", "TAILWIND", "EXPRESS", "MYSQL", "SUPABASE", "FRAMER"]
  const training = [
    "Inizio a studiare  programmazione informatica  autonomamente (Ottobre 2021)",
    "Mi iscrivo alla Start2Impact University e seguo il percorso come Full-Stack Developer (2022 - ora)",
    "Inizio un percorso di formazione in un'azienda estera, affiancato da un Senior Developer che mi insegna nuove competenze (Agosto 2022 - Febbraio 2023)",
    "Decido di intraprendere un percorso professionale come freelance (Febbraio 2023 - Ora)"
  ]
  return (
    <section id="technology" className="relative py-20 md:flex md:py-32 md:h-screen">
      <Image
        alt="technology-bg"
        style={{ objectFit: "cover", opacity: 0.5 }}
        src="/img/unsplash_WUtT8cGRPog.png"
        fill
        quality={100}
        className="-z-10"
        priority
      />
      <div className="w-fit text-center mx-auto flex-1 md:text-right md:my-auto">
        <div className="custom-text-black-gradient font-medium md:text-xl opacity-90">
          quali tecnologie uso nei miei progetti
        </div>
        <ul className="custom-text-green-black-gradient md:text-[80px] text-5xl italic font-semibold ">
          {
            technologies.map((i, index) => (
              <li className="-my-1 ml-3" key={index}>{i}</li>
            ))
          }
        </ul>
      </div>
      <div className="max-md:hidden border-[0.5px] border-white opacity-40 my-10 mx-[10%]"></div>
      <ul className="flex-1 md:my-auto max-md:text-center max-md:mt-32">
        {
          training.map((i, index) => (
            <li key={index} className="my-8 pr-3 max-w-[200px] max-md:mx-auto">{i}</li>
          ))
        }
      </ul>
    </section>
  )
}