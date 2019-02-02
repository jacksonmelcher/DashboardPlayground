import React from 'react'
import ProjectSummary from './ProjectSummary'

const ProjectList = ({projects}) => {
  return (
    <div className="card project-list section">
      <div className="card-content">
        <span className="card-title">My Tasks</span>
        <br/>
        {projects && projects.map(project => {
          return (
            <ProjectSummary project={project} key={project.id} />
          )
        })}
      </div>
    </div>
  )
}

export default ProjectList;
