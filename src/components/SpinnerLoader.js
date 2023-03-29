export function SpinnerLoader({ imageLoaded }) {

  return (
    <>
      {!imageLoaded && (
        <section className="fixed z-30 h-screen flex justify-center items-center w-full bg-black">
          <div className="spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </section>
      )}
    </>
  )
}