import MovieDisplay from "./MovieDisplay.jsx"

const MainSection = () => {
  return (
    <div id="mainSection" className="container-fluid">
      <MovieDisplay series="Harry Potter" />
      <MovieDisplay series="X-Men" />
      <MovieDisplay series="Rocky" />
    </div>
  )
}

export default MainSection
