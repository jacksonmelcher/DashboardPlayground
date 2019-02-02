import React from 'react'


const ProjectSummary = ({project}) => {
  return (
    <div className="card project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>Posted By Twitter</p>
        <p className="grey-text">3rd of September 2:00am</p>
      </div>
    </div>
  )
}

export default ProjectSummary;
