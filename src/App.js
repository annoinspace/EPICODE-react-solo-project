import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"

import NetflixNavbar from "./components/NetflixNavbar"
import GenreDetails from "./components/GenreDetails"
import Footer from "./components/Footer"
import MainSection from "./components/MainSection"

function App() {
  return (
    <BrowserRouter>
      <div className="App darkBackground">
        <NetflixNavbar />
        <Container>
          <GenreDetails />
          <Routes>
            <Route element={<MainSection />} path="/" />
          </Routes>
        </Container>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
