import React from "react"
import styled from "styled-components"
import logo from "../images/logo.jpg";

import AOS from "aos"
import "aos/dist/aos.css"

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  content: {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    background: "rgb(239,238,233, 0.9)",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "20px",
  },
}

const customTwoStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  content: {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    background: "rgb(239,238,233, 0.9)",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "20px",
  },
}

const Nav = styled.nav`
background-color: transparent;
list-style-type: none;
display: flex;
justify-content: space-between;
align-items: center;
margin: 0px auto;
padding-top: 50px;
padding-bottom: 10px;
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
    font-family: NeueMontrealLight;
  }
  .nav-link {
    font-family: NeueMontrealLight;
    font-size: 30px;
  }
  .heading {
    height: 90px;
    img {
      height: 90px;

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
  React.useEffect(() => {
    AOS.init()
  })

  return (
    <Nav>
      <div>
        <a className="heading" href="/">
          <img src={ logo }/>
        </a>
      </div>
      <div>
        <a href="/about" className="nav-link">
          About
        </a>
        <button className="nav-link">
          Projects
        </button>
        <a className="nav-link" href="mailto:tiffnbouchard@gmail.com">
          Contact
        </a>
        <a className="nav-link" download>
          Resume
        </a>
        <button
          className="mobile-menu"
          id="menu-modal"
        >
          Menu
        </button>
      </div>
    </Nav>
  )
}

export default NavBar
