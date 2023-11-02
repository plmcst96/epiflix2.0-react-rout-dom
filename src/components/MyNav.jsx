import { Container, Dropdown, Image, Navbar } from "react-bootstrap"
import { ArrowDown, BellFill, Search } from "react-bootstrap-icons"
import { Link } from "react-router-dom"
import image from "../assets/netflix_logo.png"
import avatar from "../assets/kids_icon.png"
import avatar2 from "../assets/avatar.png"

const MyNav = () => {
  return (
    <Container fluid>
      <Navbar expand="lg" className="navbar-dark bg-black p-0">
        <Navbar.Brand href="#home">
          <Link to="/home">
            <Image src={image} style={{ width: "150px" }} />
          </Link>
        </Navbar.Brand>
        <span
          className="navbar-toggler border border-0 text-white fs-6 d-flex flex-grow-1 d-lg-none"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Sfoglia
          <ArrowDown />
          <span className="dropdown-menu dropdown-menu-black bg-black"></span>
        </span>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav bg-black">
            <a className="nav-link text-white" aria-current="page" href="#home">
              Home
            </a>
            <Link to="/tv-shows" className="nav-link text-white" href="#shows">
              TV Shows
            </Link>
            <a className="nav-link text-white" href="#movie">
              Movies
            </a>
            <a className="nav-link text-white" href="#added">
              Recently Added
            </a>
            <a className="nav-link text-white" href="#list">
              My List
            </a>
          </div>
        </div>
        <div
          id="icone-right"
          className="d-flex flex-nowrap me-lg-5 align-items-center"
        >
          <Search className="text-white me-2" />
          <img src={avatar} alt="" style={{ width: "25px", height: "25px" }} />
          <BellFill className="text-white ms-2" />
          <Dropdown>
            <Dropdown.Toggle variant="black" id="dropdown-basic">
              <img src={avatar2} alt="" width="25px" height="25px" />
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: "8.3 rem" }} className="bg-black">
              <Link to="/profile" className="text-white dropdown-item">
                Profile
              </Link>
              <Link to="/setting" className="text-white dropdown-item">
                Settings
              </Link>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Navbar>
    </Container>
  )
}

export default MyNav
