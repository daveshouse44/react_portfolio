import React from "react";
import git from "../assets/images/git.jpg";

const Application = ({ application }) => {
  // Create cards for each application
  return (
    <figure className="applicationCard">
      <div className="applicationText">
        <div className="applicationLinks">
          <a href={application.deploy} target="_blank" rel="noreferrer">
            <h3>{application.name}</h3>
          </a>
          <a href={application.repo} target="_blank" rel="noreferrer">
            <img className="applicationLogo" alt="Git Logo" src={git}></img>
          </a>
        </div>
        <p>{application.overview}</p>
        <p>Technologies: {application.skill}</p>
      </div>
      <img
        className="applicationBackground"
        alt={application.name}
        src={require(`../assets/images/${application.image}`).default}
      />
    </figure>
  );
};

export default Application;
