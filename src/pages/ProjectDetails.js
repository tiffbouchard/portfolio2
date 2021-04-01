import React from "react"
import projects from "../static/projects";

const ProjectDetails = props => {

  React.useEffect(() => {
    const slug = props.match.params.slug;
    const projectsSlugs = Object.keys(projects);

    if (projectsSlugs.includes(slug)) {
      console.log("included!")
    }
  }, []);


  return (
    <div>
      Hey
    </div>
  )
}

export default ProjectDetails
