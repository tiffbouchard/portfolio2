import React from "react"
import styled from "styled-components"

const FooterContainer = styled.footer`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  padding: 40px;
  max-width: 1300px;
  margin: 0px auto;

    a {
      padding: 10px;
      font-size: 15px;
      border: none;
      color: black;
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
        <a href="http://github.com/tiffbouchard" target="_blank" rel="noreferrer">
          Github
        </a>
        <a href="http://linkedin.com/in/tiffanybouchard" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href="http://behance.net/tiffanybouchard" target="_blank" rel="noreferrer">
          Behance
        </a>
        <a href="http://instagram.com/tiffbouchard" target="_blank" rel="noreferrer">
          Instagram
        </a>
      </div>
    </FooterContainer>
  )
}

export default Footer
