import React from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import styled from "styled-components"
import proj from "../images/spotify.png"
import proj2 from "../images/project_two.png"
import proj3 from "../images/project_three.PNG"
import proj4 from "../images/logo.jpg"

const MainProjectsContainer = styled.div`
  max-width: 1300px;
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(550px,1fr));
  grid-gap: 20px;
  gap: 20px;
  width: 100%;
  padding-bottom: 50px;
  margin: 0px auto;

  a {
    position: relative;
    height: 350px;
    width: 100%;
    &:hover .overlay {
      opacity: 1;
      transition: .5s ease-in-out;
    }
    .img-container {
      height: 350px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: white;
      margin: 0px;
      .image {
        width: 100%;
        height: 350px;
        object-fit: cover;
      }
      .logo {
        height: 50%;
      }
    }
  }
  }
`
const Overlay = styled.div`
  transition: .5s ease;
  opacity: 0;
  height: 100%;
  width: 100%;
  position: absolute;  
  background-color: rgba(250, 250, 250, 0.5);
  backdrop-filter: blur(3px);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    font-size: 30px;
    margin: 0px;
  }
  p {
    margin: 2px;
  }
}
`

const ProjectsSection = props => {
  React.useEffect(() => {
    AOS.init()
  })

  return (
    <section id="projects" data-aos="fade-up"
    data-aos-delay="250"
    data-aos-duration="1000">
      <MainProjectsContainer>
      <a href="#">
        <Overlay className="overlay">
          <h1>Artist Explorer</h1>
          <p>Development / Web Design</p>
        </Overlay>
        <div className="img-container">
          <img className="logo" src={proj}/>
        </div>
      </a>
      <a href="#">
        <div className="img-container">
          <Overlay className="overlay">
            <h1>Forkpitch</h1>
            <p>Development / Web Design</p>
          </Overlay>
          <img className="image" src={proj2}/>
        </div>
      </a>
      <a href="#">
        <Overlay className="overlay">
          <h1>Personal Branding</h1>
          <p>Branding / Logo Design / Development / Web Design</p>
        </Overlay>
        <div className="img-container">
          <img className="image" src={proj4}/>
        </div>
      </a>
      <a href="#">
        <Overlay className="overlay">
          <h1>Bidgala</h1>
          <p>Development / Web Design</p>
        </Overlay>
        <div className="img-container">
          <img className="logo" src={proj3}/>
        </div>
      </a>
      {/* <a href="#">
        <Overlay className="overlay">
          <h1>Capital Blockchain</h1>
          <p>Logo Design</p>
        </Overlay>
        <div className="img-container">
          <img className="image" src={proj4}/>
        </div>
      </a>
      <a href="#">
        <Overlay className="overlay">
          <h1>Movie Seating</h1>
          <p>UX + UI / Branding / Logo Design</p>
        </Overlay>
        <div className="img-container">
          <img className="image" src={proj4}/>
        </div>
      </a>
      <a href="#">
        <Overlay className="overlay">
          <h1>Graphics Branding Project</h1>
          <p>Branding / Visual Design / UI</p>
        </Overlay>
        <div className="img-container">
          <img className="image" src={proj4}/>
        </div>
      </a> */}
      </MainProjectsContainer>
    </section>
  )
}

export default ProjectsSection
