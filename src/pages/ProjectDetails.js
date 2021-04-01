import React from "react";
import styled from 'styled-components';
import projects from "../static/projects";
import AOS from "aos"
import "aos/dist/aos.css"

const Intro = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 70px;
  margin-top: 30px;
`

const AdditionalSection = styled.section`
  width: 100%;
  img {
    width: 100%;
  }
`

const ProjectContainer = styled.div`
  max-width: 1300px;
  margin: 0px auto;
  padding-bottom: 60px;
  header {
    width: 100%;
    img {
      width: 100%;
    }
    .info {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      padding: 0px 40px;
      div {
        a {
          margin-right: 5px;
          background-color: #f7f7f7;
          padding: 10px;
          border-radius: 5px;
        }
      }
    }
  }
  main {
    padding: 0px 40px;
  }
`



const ProjectDetails = props => {
  const [project, setProject] = React.useState();

  const getProject = () => {
    const slug = props.match.params.slug;
    const projectsSlugs = Object.keys(projects);

    if (projectsSlugs.includes(slug)) {
      setProject(projects[slug])
    }
  }

  React.useEffect(() => {
    getProject();
  }, []);

  React.useEffect(() => {
    AOS.init()
  })

  return (
    <>
    {project && 
      <ProjectContainer >
        <header
          data-aos="fade-up"
          data-aos-delay="250"
          data-aos-duration="1000"
        >
          <img src={project.header} alt="project header"/>
          <div className="info">
            <p>Development / Web Design</p>
            <div>
              <a href="https://github.com" target="_blank" rel="noreferrer">Code</a>
              <a href="http://artist-explorer.herokuapp.com">Live Demo</a>
            </div>
          </div>
        </header>
        <main>
          <Intro
            data-aos="fade-up"
            data-aos-delay="250"
            data-aos-duration="1000"
          >
            <div className="left">
              <h2>About</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="right">
              <h2>Tech Stack</h2>
              <ul>
                <li>HTML/CSS</li>
                <li>React</li>
                <li>Spotify Web API</li>
              </ul>
            </div>
          </Intro>
          <AdditionalSection
            data-aos="fade-up"
            data-aos-delay="250"
            data-aos-duration="1000"
          >
            <h2>Wireframes</h2>
          </AdditionalSection>
          <AdditionalSection>
            <h2>Preview</h2>
          </AdditionalSection>
          <AdditionalSection>
            <h2>Next Steps + Improvements</h2>
          </AdditionalSection>
        </main>
      </ProjectContainer>
    }
    </>
  )
}

export default ProjectDetails
