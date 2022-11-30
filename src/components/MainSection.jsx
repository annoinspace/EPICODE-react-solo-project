import MovieDisplay from "./MovieDisplay.jsx"
import GenreDetails from "./GenreDetails.jsx"

const MainSection = () => {
  return (
    <div id="mainSection" className="container-fluid">
      <GenreDetails header="Movies" />
      <MovieDisplay series="Harry Potter" />
      <MovieDisplay series="X-Men" />
      <MovieDisplay series="Rocky" />
    </div>
  )
}

export default MainSection
