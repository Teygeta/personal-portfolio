import Image from "next/image";

export function Technology() {

  const technologies = ["NEXTJS", "TAILWIND", "EXPRESS", "MYSQL", "SUPABASE", "FRAMER"]
  const training = [
    "Beginning to study computer programming on my own (2021)",
    "I enroll in Start2Impact University and follow the path as a Full-Stack Developer (2022 - now)",
    "I start a training path in a foreign company supported by a Senior Developer who teaches me new skills ( Sept 2022 - Feb 2023)",
    "I decide to embark on a freelance career path (Now)"
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
          what I mainly use in my projects
        </div>
        <ul className="custom-text-green-gradient md:text-[80px] text-5xl italic font-semibold ">
          {
            technologies.map((i, index) => (
              <li className="-my-1 ml-3" key={index}>{i}</li>
            ))
          }
        </ul>
      </div>
      <div className="max-md:hidden border-[0.5px] border-white opacity-40 my-10 mx-[10%]"></div>
      <ul className="flex-1 font-thin md:my-auto max-md:text-center max-md:mt-32">
        {
          training.map((i, index) => (
            <li key={index} className="my-8 pr-3 max-w-[200px] max-md:mx-auto">{i}</li>
          ))
        }
      </ul>
    </section>
  )
}