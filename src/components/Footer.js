import React from "react"
import styled from "styled-components"

const FooterContainer = styled.footer`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  margin: 40px;
    a {
      padding: 10px;
      font-family: NeueMontreal;
      background: none;
      font-size: 15px;
      border: none;
      color: black;
      transition: 0.5s;
      text-decoration: none;
      &:hover {
      }
    }
  }
  @media (max-width: 960px) {
    align-items: center;
    flex-direction: column;
    .socials {
      margin-top: 5px;
    }
  }
`

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <a href="http://tiffbouchard.com">
          by Tiffany Bouchard
        </a>
      </div>
      <div className="socials">
        <a href="http://github.com/tiffbouchard" target="_blank">
          Github
        </a>
        <a href="http://linkedin.com/in/tiffanybouchard" target="_blank">
          LinkedIn
        </a>
        <a href="http://behance.net/tiffanybouchard" target="_blank">
          Behance
        </a>
        <a href="http://instagram.com/tiffbouchard" target="_blank">
          Instagram
        </a>
      </div>
    </FooterContainer>
  )
}

export default Footer
