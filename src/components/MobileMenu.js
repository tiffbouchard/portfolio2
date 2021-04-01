import React from "react"
import styled from "styled-components"

const MobileMenuContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  background-color: white;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .links {
    margin-top: -100px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    a {
      color: black;
      font-size: 40px;
    }
  }
  header {
    margin-top: -20px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    button {
      padding: 50px;
      font-size: 20px;
      color: black;
    }
  }
  ${({ show }) => show && `
    transition: 0.5s ease-in-out;
    transform: translate3d(0vw, 0, 0);
  `}
    ${({ show }) => !show && `
      transition: 0.5s ease-in-out;
      transform: translate3d(-100vw, 0, 0);
  `}
`

const MobileMenu = (props) => {
  const { show, showMenu } = props;

  return (
    <MobileMenuContainer show={show}>
      <header>
        <button onClick={showMenu}>X</button>
      </header>
      <div className="links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/#projects">Projects</a>
        <a href="mailto:tiffnbouchard@gmail.com">Contact</a>
        <a href="/resume">Resume</a>
      </div>
    </MobileMenuContainer>
  )
}

export default MobileMenu;
