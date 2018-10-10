import React from "react";

const ProjectDetails = props => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="car z-depth-0">
        <div className="car-content">
          <span className="car-title">Project Title with id of {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi in
            aut dolores libero, mollitia rerum, saepe maiores sed qui nostrum
            voluptatem. Molestias tempora dolor quia architecto suscipit laborum
            ducimus deserunt.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Mahmoud</div>
          <div>2nd Sept, 2am</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
