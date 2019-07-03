import React from 'react'
import Projectsummary from './Projectsummary'
import { Link } from 'react-router-dom'

const ProjectList = ({projects}) => {
    return (
      <div className="project-list section">
        { projects && projects.map(project => {
          return (
            <Link to = {'/project/' + project.id}>
            <Projectsummary project={project} key={project.id} />
            </Link>
          )
        })}  
      </div>
    )
  }
  
  export default ProjectList