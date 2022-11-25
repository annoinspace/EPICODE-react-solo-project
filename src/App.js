import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { Container } from "react-bootstrap"
// import NavbarTop from "./components/NavbarTop"
import NetflixNavbar from "./components/NetflixNavbar"
import GenreDetails from "./components/GenreDetails"
import Footer from "./components/Footer"
import MainSection from "./components/MainSection"

function App() {
  return (
    <div className="App darkBackground">
      {/* <NavbarTop /> */}
      <NetflixNavbar />
      <Container>
        <GenreDetails />
        <MainSection />
      </Container>
      <Footer />
    </div>
  )
}

export default App
