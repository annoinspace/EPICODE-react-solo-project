import { Component } from "react"
import { Container } from "react-bootstrap"
import MovieDisplay from "./MovieDisplay.jsx"

class MainSection extends Component {
  state = {}

  render() {
    return (
      <Container id="mainSection">
        <MovieDisplay />
      </Container>
    )
  }
}

export default MainSection
