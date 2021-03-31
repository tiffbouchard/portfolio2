import React from "react"
import styled from "styled-components";
import img1 from "../images/about/IMG_0088.JPG";
import img2 from "../images/about/IMG_3632.jpg";
import img3 from "../images/about/IMG_3942.jpg";
import img4 from "../images/about/IMG_4088.jpg";
import img5 from "../images/about/IMG_4387.jpg";

const AboutContainer = styled.div`
  padding-top: 40px;
  font-family: NeueMontreal;
  max-width: 1300px;
  margin: 0px auto;
  .main-info {
    display: flex;
  }
  .images {
    height: 500px;
    margin: 0 0 60px 60px;
  }
  .more-info {
    padding-top: 40px;
    a {
      font-size: 13px;
    }
    display: flex;
    justify-content: space-between;
    div {
      display: flex;
      flex-direction: column;
    }
    .skills {
      ul {
        padding: 0;
      }
      li {
        list-style: none;
        font-size: 13px;
      }
    }
  }
`

const IndexPage = props => {
  return (
    <div id="top">
      <AboutContainer>
        <h1>About</h1>
        <div className="main-info">
          <p>
              Hey, I'm Tiffany and I'm a frontend developer + designer from Toronto currently working on <a href="https://bidgala.com"><u>Bidgala</u></a>.
              <br />
              <br />
              I've always been a visual person, from the way I learn best to my appreciation for visually pleasing things. I believe that 
              <br />
              <br />
              Aside from development and design, I love travelling, music festivals, running, biking and baking.
            </p>
            <img className="images" src={img4}/>
          </div>
          < hr />
          <div className="more-info">
            <div>
              <h3>Education</h3>
              <small>University of Toronto</small>
              <small>Bachelors of Arts (Hons)</small>
              <small>Philosophy + Criminology</small>
              <small>2016-2020</small>
            </div>
            <div>
              <h3>Experience</h3>
              <small>Fullstack Developer</small>
              <small>Bidgala</small>
              <small>September 2020-Present</small>
              <small>Montreal, QC</small>
            </div>
            <div className="skills">
              <h3>Skills</h3>
              <ul>
                <li>HTML/CSS/SASS</li>
                <li>JavaScript</li>
                <li>Python</li>
                <li>SQL</li>
                <br />
                <li>React</li>
                <li>Node.js</li>
                <li>Django</li>
                <br />
                <li>MongoDB</li>
                <li>PostgreSQL</li>
                <br />
                <li>Adobe Photoshop</li>
                <li>Adobe Illustrator</li>
                <li>Adobe XD</li>
                <li>Figma</li>
              </ul>
            </div>
            <div>
              <h3>Connect</h3>
              <a mailto="tiffnbouchard@gmail.com">tiffnbouchard@gmail.com</a>
              <br />
              <a href="https://linkedin.com/in/tiffanybouchard">Linkedin</a>
              <a href="https://linkedin.com/in/tiffanybouchard">Instagram</a>
            </div>
          </div>
          <div>
            <img className="images"src={img1}/>
            <img className="images"src={img2}/>
            <img className="images"src={img3}/>
            <img className="images" src={img5}/>
          </div>
      </AboutContainer>
  </div>
  )
}

export default IndexPage
