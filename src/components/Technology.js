import Image from "next/image";

export function Technology() {

  const technologies = ["NEXTJS", "TAILWIND", "EXPRESS", "MYSQL", "SUPABASE", "FRAMER"]
  return (
    <section id="technology" className="max-md:h-[90vh] h-screen md:flex relative">
      <Image
        alt="technology-bg"
        style={{ objectFit: "cover", opacity: 0.5 }}
        src="/img/unsplash_WUtT8cGRPog.png"
        fill
        quality={100}
        className="-z-10"
        priority
      />
      <div className="w-fit mx-auto py-20 md:my-auto md:mr-[10%] text-right flex-1 ">
        <div className="custom-text-black-gradient font-medium md:text-3xl opacity-90">
          what I mainly use in my projects
        </div>
        <ul className="custom-text-green-gradient md:text-[80px] text-5xl italic font-semibold ">
          {
            technologies.map(i => (
              <li className="-my-1" key={i}>{i}</li>
            ))
          }
        </ul>
      </div>
      <div className="max-md:hidden border-[0.5px] border-white opacity-40 my-10"></div>
      <ul className="flex-1 my-auto font-thin mx-auto">
        <li className="my-8 max-w-[200px]">Beginning to study computer programming
          on my own (2021)
        </li>
        <li className="my-8 max-w-[200px]">I enroll in Start2Impact University and follow the path as a Full-Stack
          Developer (2022 -
          now)
        </li>
        <li className="my-8 max-w-[200px]">I start a training path in a foreign company supported by a Senior Developer
          who teaches
          me
          new skills (
          Sept 2022 - Feb 2023)
        </li>
        <li className="my-8 max-w-[200px]">I decide to embark on a freelance career path (Now)</li>
      </ul>
    </section>
  )
}