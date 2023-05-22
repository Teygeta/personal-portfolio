import { Nav } from "./Nav"

export function Layout({ children }) {
  return (
    <>
      <Nav />
      <section className="px-8 md:px-24 lg:px-36">
        {children}
      </section>
    </>
  )
}