import React from "react"
import styled from 'styled-components';
import logo from '../images/logo.PNG';

const ResumeContainer = styled.div`
  margin: 0px auto;
  padding: 0;
  display: flex;
  @media (max-width: 725px) {
    flex-direction: column;
  }
  aside {
    @media (max-width: 725px) {
      position: static;
      width: 100%;
      height: 100%;
      padding: 0px;
      div {
        padding-left: 40px;
        padding-right: 40px;
      }
    }
    padding: 0px 20px;
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 300px;
    background-color: #f7f7f7;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    div {
      margin: 30px 0px;
    }
    .socials {
      font-size: 13px;
      display: flex;
      justify-content: space-between;
      a {
        &:hover {
          text-decoration: underline;
        }
      }
    }
    .contact {
      display: flex;
      flex-direction: column;
      margin-top: 10px;
      small {
        padding: 2px;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    div {
      h2 {
        margin-bottom: 2px;
      }
      .heading {
        margin: 0px 0px 10px 0px;
      }
    }
    img {
      height: 100px;
      border-radius: 50%;
    }
  }
  main {
    max-width: 1000px;
    width: 100%;
    padding: 50px 50px 50px 400px;
    @media (max-width: 725px) {
      padding: 20px 40px;
      width: fit-content;
    }
  }
  .skills {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    div {
      width: fit-content;
      ul {
        padding: 0px;
      }
      li {
        list-style: none;
        font-size: 13px;
      }
    }
  }

`

const SubSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0px;
  a {
    font-family: degular,sans-serif;
    font-weight: 400;
  }
  h4 {
    margin: 0px;
    padding: 0;
  }
  ul {
    font-size: 13px;
  }
`

const Button = styled.a`
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  font-size: 13px;
  margin-top: 30px;
`

const Resume = props => {
  return (
    <ResumeContainer>
      <aside>
        <div>
          <Button href="/">Home</Button>
          <div>
            <img src={logo} alt="logo"/>
            <h2>Tiffany Bouchard</h2>
            <p className="heading">Frontend Developer</p>
            <small className="bio">I am driven by curiosity and I love a good challenge. I am  passionate about building things that make people’s lives better while implementing pixel-perfect and user-centered design.</small>
          </div>
          <div className="contact">
            <small><a href="mailto:tiffnbouchard@gmail.com">tiffnbouchard@gmail.com</a></small>
            <small><a href="http://tiffbouchard.com">tiffbouchard.com</a></small>
            <small><a href="tel:647-381-1429">647 381 1429</a></small>
            <Button href="https://indd.adobe.com/view/2ac36af3-2482-4c04-b99a-5622bebffd5a" target="_blank">Download PDF</Button>
          </div>
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
      </aside>
      <main>
        <section>
          <div>
            <h2>Education</h2>
            <SubSection>
              <h4>University of Toronto</h4>
              <small>Bachelor of Arts (Hons)</small>
              <small>Philosophy + Criminology</small>
              <small>2016-2020</small>
            </SubSection>
            <SubSection>
              <h4>University of Manchester (Student Exchange)</h4>
              <small>Bachelor of Arts (Hons)</small>
              <small>Philosophy + Criminology</small>
              <small>2020</small>
            </SubSection>
            <SubSection>
              <h4>General Assembly</h4>
              <small>Certificate</small>
              <small>Software Engineering Immersive</small>
              <small>2020</small>
            </SubSection>
          </div>
          <div>
            <h2>Experience</h2>
             <SubSection>
              <h4>UI/UX Developer ∙ <a href="https://instagram.com/bidgala" target="_blank" rel="noreferrer">Bidgala</a></h4>
              <small>Montreal QC ∙ April 2020-Present</small>
              <ul>
                <li>Conduct user research, develop personas and user stories</li>
                <li>Design wireframes and prototypes in Figma and conduct user testing</li>
                <li>Facilitate handoff of designs to other developers</li>
                <li>Transform designs into pixel-perfect code</li>
              </ul>
            </SubSection>
            <SubSection>
              <h4>Fullstack Developer ∙ <a href="https://instagram.com/bidgala" target="_blank" rel="noreferrer">Bidgala</a></h4>
              <small>Montreal QC ∙ Sept 2020-April 2020</small>
              <ul>
                <li>Tech Used: HTML/CSS, Bootstrap, JavaScript/jQuery, React, Python, Django, PostgreSQL</li>
                <li>Founding developer responsible for building product from ground up and garnering over 1000 users</li>
                <li>Designed and developed Profile, Product, Sell and Landing pages</li>
                <li>Responsible for maintaining responsive design and implementing UX design principles</li>
                <li>Designed and developed backend for Profile and Payments</li>
                <li>Implemented Stripe Connect for marketplace payments, generating over 1k in revenue</li>
                <li>Participate in startup advisory meetings and marketing strategizing</li>
              </ul>
            </SubSection>
            <SubSection>
              <h4>Freelance Developer + Graphic Designer</h4>
              <small>Toronto ON ∙ Jan 2021-Present</small>
            </SubSection>
          </div>
        </section>
        <section className="skills">
          <div>
            <h2>Skills</h2>
            <ul>
              <li>REST API</li>
              <li>AJAX</li>
              <li>Version control/Git</li>
              <li>Asynchronous programming</li>
              <li>Responsive Design</li>
              <li>Wireframing/Prototyping</li>
              <li>Graphic Design</li>
              <li>UX/UI Design</li>
            </ul>
          </div>
          <div>
            <h2>Development</h2>
            <ul>
              <li>HTML/CSS/SASS</li>
              <li>JavaScript/jQuery</li>
              <li>React</li>
              <li>Node.js</li>
              <li>Python</li>
              <li>Django</li>
              <li>SQL</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div>
            <h2>Design</h2>
            <ul>
              <li>Adobe Illustrator</li>
              <li>Adobe Photoshop</li>
              <li>Adobe XD</li>
              <li>Adobe InDesign</li>
              <li>Figma</li>
            </ul>
          </div>
        </section>
      </main>
      
    </ResumeContainer>
  )
}

export default Resume;
