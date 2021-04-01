import React from "react"
import styled from "styled-components"
import logo from "../images/logo.jpg";
import MobileMenu from "../components/MobileMenu";

import AOS from "aos"
import "aos/dist/aos.css"

const Nav = styled.nav`
background-color: transparent;
list-style-type: none;
display: flex;
justify-content: space-between;
align-items: center;
margin: 0px auto;
padding: 50px 40px 10px 40px;
transition: background 0.5s;
max-width: 1300px;
button, a {
      padding: 10px;
      background: none;
      font-size: 20px;
      border: none;
      color: black;
      transition: 0.5s;
      text-decoration: none;
      &:hover {
        cursor: pointer;
      }
    a {
      color: black;
    }
  }
  .mobile-menu {
    display: none;
  }
  .nav-link {
    font-size: 20px;
  }
  .heading {
    height: 50px;
    img {
      height: 50px;

    }
  }
}
  @media (max-width: 960px) {
    .nav-link {
      display: none;
    }
    .mobile-menu {
      display: flex;
    }
  }

  @media (max-width: 460px) {
   .heading {
    font-size: 30px;
    text-align: left;
  }
}
}
`

const NavBar = () => {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    AOS.init()
  })

  const showMenu = () => {
    setShow(!show);
  }

  return (
    <Nav>
      <MobileMenu
        show={show}
        showMenu={showMenu}
      />
      <div>
        <a className="heading" href="/">
          <img src={ logo } alt="logo"/>
        </a>
      </div>
      <div>
        <a href="/about" className="nav-link">
          About
        </a>
        <a className="nav-link" href="/#projects">
          Projects
        </a>
        <a className="nav-link" href="mailto:tiffnbouchard@gmail.com">
          Contact
        </a>
        <a className="nav-link" href="/resume">
          Resume
        </a>
        <button
          className="mobile-menu"
          id="menu-modal"
          onClick={showMenu}
        >
          Menu
        </button>
      </div>
    </Nav>
  )
}

export default NavBar
