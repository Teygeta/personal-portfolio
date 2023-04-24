export function SectionIntro({ children, title }) {

  return (
    <div className="mx-auto w-fit">
      <div className="max-w-4xl">
        <h1
          className="text-custom-light-green section-intro-title">{title}</h1>
        {children}
      </div>
    </div>

  )
}