import { Nav, Image, NavDropdown } from "react-bootstrap"
import netflix_logo from "../assets/netflix_logo.png"
import userprofileimage from "../assets/avatar.png"

function NetflixNavbar() {
  return (
    <Nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="http://ubeytdemir.me/netflix-ui">
          <Image src={netflix_logo} id="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse d-flex justify-content-between"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="index.html">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#1">
                Tv Shows
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#1">
                Movies
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#1">
                Recently Added
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#1">
                My List
              </a>
            </li>
          </ul>

          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search icon"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#1">
                KIDS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-bell-fill icon"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                </svg>
              </a>
            </li>
            <NavDropdown
              className="dropdown-menu-left mr-1 text-white "
              title={<Image src={userprofileimage} width="32" alt="user pic" />}
            >
              <NavDropdown.Item className=" text-white" href="#action/3.1">
                My Profile
              </NavDropdown.Item>
              <NavDropdown.Item className=" text-white" href="#action/3.2">
                Settings
              </NavDropdown.Item>
              <NavDropdown.Item className=" text-white" href="#action/3.3">
                Logout
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className=" text-white" href="#action/3.4">
                Help
              </NavDropdown.Item>
            </NavDropdown>
          </ul>
        </div>
      </div>
    </Nav>
  )
}

export default NetflixNavbar
