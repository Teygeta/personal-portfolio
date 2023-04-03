import Image from "next/image";

export function DesignConcepts({ className }) {
  const concepts = [
    '/img/example-(1).png',
    '/img/example-(2).png',
    '/img/example-(3).png',
    '/img/example-(4).png',
  ]

  return (
    <div className="">
      <Image
        alt="portfolio-bg"
        src='/img/example-(1).png'
        width="500"
        height="0"
        quality={100}
        className='absolute -z-10'
      />
      <Image
        alt="portfolio-bg"
        src='/img/example-(2).png'
        width="500"
        height="0"
        quality={100}
        className='absolute -z-10'
      />
      <Image
        alt="portfolio-bg"
        src='/img/example-(3).png'
        width="500"
        height="0"
        quality={100}
        className='absolute -z-10'
      />
      <Image
        alt="portfolio-bg"
        src='/img/example-(4).png'
        width="500"
        height="0"
        quality={100}
        className='absolute -right-1'
      />
    </div>
  )
}