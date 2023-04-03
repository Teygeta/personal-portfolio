import Image from "next/image";

export function Technology() {
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
      <div className="w-fit mx-auto my-auto text-right flex-1 mr-[10%]">
        <div className="custom-text-black-gradient font-extralight md:text-3xl opacity-90">
          what I mainly use in my projects
        </div>
        <ul className=" custom-text-green-gradient md:text-[80px] text-5xl italic font-semibold">
          <li>NEXTJS</li>
          <li>TAILWIND</li>
          <li>EXPRESS</li>
          <li>MYSQL</li>
          <li>SUPABASE</li>
          <li>FRAMER</li>
        </ul>
      </div>
      <div className="max-md:hidden border-[0.5px] border-white opacity-40 my-10"></div>
      <div className="flex-1 my-auto ml-[10%] mr-5">
        <p className="max-w-xs font-extralight tracking-tight text-xl opacity-90">
          Beginning to study computer programming on my own (2021)
          <br/>
          <br/>
          I enroll in Start2Impact University and follow the path as a Full-Stack Developer (2022 - now)
          <br/>
          <br/>
          I start a training path in a foreign company supported by a Senior Developer who teaches me new skills (Sept
          2022 - Feb 2023)
          <br/>
          <br/>
          I decide to embark on a freelance career path (Now)
        </p>
      </div>
    </section>
  )
}