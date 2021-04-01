import React from "react"
import styled from "styled-components";
import img1 from "../images/about/IMG_0088.JPG";
import img2 from "../images/about/IMG_3632.jpg";
import img3 from "../images/about/IMG_3942.jpg";
import img4 from "../images/about/IMG_4088.jpg";
import img5 from "../images/about/IMG_4387.jpg";

const AboutContainer = styled.div`
  padding: 40px;
  max-width: 1300px;
  margin: 0px auto;
  .main-info {
    display: flex;
  }
  .main-img {
    position: relative;
  }
  .images {
    height: 400px;
  }
  .images.one {
    margin: 0 0 60px 60px;
  }
  .more-info {
    padding: 40px 0 40px 0;
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
        margin: 0px;
        padding: 0px;
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
          <div className="main-img">
            <div className="main-info">
              <p>
                <h2>Hey, I'm Tiffany and I'm a frontend developer + designer from Toronto currently working on <a href="https://instagram.com/bidgala" target="_blank" rel="noreferrer"><u>Bidgala</u></a>.</h2>
                <br />
                I've always been a visual person, from the way I learn best to my appreciation for visually pleasing things in everyday life. As long as I am creating, I am happy. I believe development and design are not mutually exclusive and knowledge and consideration of both is important in order to building amazing products. I am passionate about building things that make people's lives better while helping to bridge the gap between development and design. When I am not building something I love working on design projects, in particular, branding, packaging + UX/UI. 
                <br />
                <br />
                In my free time I'm probably travelling, hitting up a music festival or concert, running, biking or doing anything that involves food.
              </p>
              <img className="images one"src={img3}/>
            </div>
            {/* <div>
              <img className="images two"src={img1}/>
              <img className="images three"src={img2}/>
              <img className="images five" src={img5}/>
            </div> */}
          </div>
          < hr />
          <div className="more-info">
            <div>
              <h3>Education</h3>
              <small><b>University of Toronto</b></small>
              <small>Bachelor of Arts (Hons)</small>
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
              <a href="mailto:tiffnbouchard@gmail.com">tiffnbouchard@gmail.com</a>
              <br />
              <a target="_blank" href="https://linkedin.com/in/tiffanybouchard">Linkedin</a>
              <a target="_blank" href="https://github.com/tiffbouchard">Github</a>
              <a target="_blank" href="https://behance.net/tiffanybouchard">Behance</a>
              <a target="_blank" href="https://instagram.com/tiffbouchard">Instagram</a>
            </div>
          </div>
      </AboutContainer>
  </div>
  )
}

export default IndexPage
