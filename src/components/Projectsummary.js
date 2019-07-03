import React from 'react'
import moment from 'moment'

const Projectsummary = ({project}) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-2">
        <span className="card-title ">{project.title}</span>
        <p>Posted by {project.authorFN} {project.authorLN} </p>
        <p className="grey-text text-lighten-1"> {moment(project.createdAt.toDate()).calendar()} </p>
      </div>
    </div>
  )
}

export default Projectsummary