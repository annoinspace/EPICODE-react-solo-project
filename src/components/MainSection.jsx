import { Component } from "react"
import { Container } from "react-bootstrap"
import MovieDisplay from "./MovieDisplay.jsx"

class MainSection extends Component {
  state = {}

  render() {
    return (
      <Container id="mainSection">
        <MovieDisplay series="Harry Potter" />
        <MovieDisplay series="The Good Detective" />
        <MovieDisplay series="Harry Potter" />
      </Container>
    )
  }
}

export default MainSection
