import React from 'react';

const ProjectDetails = (props) => {

  const id = props.match.params.id;

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
         <div className="card-content">
           <span className="card-title">Task Title - {id} </span>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
             itaque tempore laborum sapiente illo deserunt iusto doloremque,
             perspiciatis voluptatibus atque. Fuga harum recusandae sapiente,
             necessitatibus veritatis nisi corrupti illo laudantium.</p>
         </div>
         <div className="card-action lighten-4 grey-text">
           <div>Posted By Twitter</div>
           <div>1/28/2019 2:00am</div>
         </div>
       </div>
    </div>
  )
}

export default ProjectDetails;
