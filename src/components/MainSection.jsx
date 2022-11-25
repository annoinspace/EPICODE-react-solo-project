import { Component } from "react"

import MovieDisplay from "./MovieDisplay.jsx"

class MainSection extends Component {
  state = {}

  render() {
    return (
      <div id="mainSection" className="container-fluid">
        <MovieDisplay series="Harry Potter" />
        <MovieDisplay series="X-Men" />
        <MovieDisplay series="Rocky" />
      </div>
    )
  }
}

export default MainSection
