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
  @media (max-width: 725px) {
    display: block;
  }
`

const AdditionalSection = styled.section`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2, li {
    text-align: left;
    width: 100%;
  }
  img {
    width: 100%;
  }
  #center {
    width: 60%;
    margin: 0px auto;
    @media (max-width: 725px) {
      width: 100%;
    }
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
      .links {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        color: white;
      }
      div {
        a {
          margin-right: 5px;
          background-color: black;
          padding: 10px 20px;
          border-radius: 5px;
          margin-bottom: 5px;
          transition: 0.3s ease-in-out;
          color: white;
          &:hover {
            transition: 0.3s ease-in-out;
            background-color: #040404;
          }
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
            <p>{project.role}</p>
            <div className="links">
              {project.links && project.links.map((link) => 
                <a href={link.link} target="_blank" rel="noreferrer">{link.name}</a>
              )}
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
              <p>{project.about}</p>
            </div>
              {project.tech && 
                <div className="right">
                  <h2>Tech Stack</h2>
                  <ul>
                    {project.tech.map((item) => 
                      <li>{item}</li>
                    )}
                  </ul>
                </div>
              }
          </Intro>
          {project.sections.map((section) => 
            <AdditionalSection
              data-aos="fade-up"
              data-aos-delay="250"
              data-aos-duration="1000">
              <h2>{section.title}</h2>
              {section.images && section.images.map((img) => 
                <img src={img.link} alt="" id={img.id && img.id}/>
              )}
              {section.content && section.content.map((con) => 
              <li>{con}</li>
              )}
            </AdditionalSection>
            
          )}

        </main>
      </ProjectContainer>
    }
    </>
  )
}

export default ProjectDetails
