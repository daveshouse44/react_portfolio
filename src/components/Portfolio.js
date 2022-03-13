import React from "react";
import Application from "./Application";
import applicationList from "../applicationList.json";

const Portfolio = () => {
  return (
    // Single application component goes here
    <section>
      <h1>Portfolio Projects:</h1>
      <div id="applicationCards">
        {applicationList.map((application) => (
          <Application application={application} key={`${application.name}`} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
