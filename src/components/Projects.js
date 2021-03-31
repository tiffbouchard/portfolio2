import React from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import styled from "styled-components"
import proj from "../images/spotify.png"
import proj2 from "../images/project_two.png"
import proj3 from "../images/project_three.PNG"

const MainProjectsContainer = styled.div`
  max-width: 1300px;
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(550px,1fr));
  grid-gap: 20px;
  gap: 20px;
  width: 100%;
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
      background-color: #f5f5f5;
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
  font-family: NeueMontreal;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    font-size: 40px;
    margin: 0px;
  }
  p {
    margin: 2px;
  }
}
`

const ProjectContainerOne = styled.div`
  display: flex;
  margin: 40px;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    h4 {
      font-family: NeueMontreal;
      font-size: 25px;
      margin-bottom: 20px;
    }
    div {
      margin-bottom: 10px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      span {
        font-family: NeueMontreal;
        font-size: 12px;
        padding: 5px;
        margin-right: 5px;
        margin-bottom: 5px;
        border: solid 1px;
      }
    }
    p {
      font-family: NeueMontreal;
      text-align: justify;
    }
  }
  img {
    height: 400px;
    margin-left: 30px;
  }
  @media (max-width: 1000px) {
    display: block;
    flex-wrap: wrap;
    img {
      max-width: 100%;
      height: auto;
      margin-left: 0px;
    }
  }
`

const ProjectContainerTwo = styled.div`
  display: flex;
  flex-direction: row-reverse;
  text-align: right;
  margin: 60px 40px;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    h4 {
      font-family: NeueMontreal;
      font-size: 25px;
      margin-bottom: 20px;
    }
    div {
      margin-bottom: 10px;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      span {
        font-family: "NeueMontreal";
        font-size: 11px;
        padding: 5px;
        margin-right: 5px;
        margin-bottom: 5px;
        border: solid 1px;
        flex-wrap: wrap;
      }
    }
    p {
      font-family: "NeueMontreal";
      text-align: justify;
    }
  }
  img {
    margin-right: 30px;
    max-width: 600px;
  }
  @media (max-width: 1000px) {
    display: block;
    flex-wrap: wrap;
    img {
      max-width: 100%;
      height: auto;
      margin-right: 0px;
    }
  }
`



const ProjectsSection = props => {
  React.useEffect(() => {
    AOS.init()
  })

  return (
    <section id="projects" data-aos="fade-up"
    data-aos-delay="300"
    data-aos-duration="1000">
      <MainProjectsContainer>
      <a href="#">
        <Overlay className="overlay">
          <h1>Artist Explorer</h1>
          <p>Development | Design</p>
        </Overlay>
        <div className="img-container">
          <img className="logo" src={proj}/>
        </div>
      </a>
      <a href="#">
        <div className="img-container">
          <Overlay className="overlay">
            <h1>Forkpitch</h1>
            <p>Development | Design</p>
          </Overlay>
          <img className="image" src={proj2}/>
        </div>
      </a>
      <a href="#">
        <Overlay className="overlay">
          <h1>Bidgala</h1>
          <p>Development | Design</p>
        </Overlay>
        <div className="img-container">
          <img className="logo" src={proj3}/>
        </div>
      </a>
      <a href="#">
        <div className="img-container">
          {/* <img src={proj}/> */}
        </div>
      </a>
      </MainProjectsContainer>
    </section>
  )
}

export default ProjectsSection
