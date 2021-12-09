import React from "react";

const Resume = () => {
  return (
    <section>
      <div className="contactHeader">
      <h1>Resume</h1>
      <p>
        Checkout my resume {" "}
        <a
          href="https://drive.google.com/file/d/1iopTG8Iozatg8scbGFYFdrtyGhgnTmT5/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>!
      </p>
      </div>
      <div className="skillList">
        <div>
      <h3>Front-end Skills</h3>
      <ul className="frontSkills">
        <li>HTML</li>
        <li>CSS</li>
        <li>javascript</li>
        <li>JQuery</li>
        <li>React</li>
        <li>Bootstrap</li>
        <li>Tailwind CSS</li>
        <li>IndexedDB</li>
      </ul>
      </div>
      <div>
      <h3>Back-end Skills</h3>
      <ul className="backSkills">
        <li>Node</li>
        <li>Express</li>
        <li>MySQL</li>
        <li>APIs</li>
        <li>MongoDB</li>
        <li>Insomnia</li>
        <li>Heroku</li>
        <li>GraphQL</li>
      </ul>
      </div>
      </div>
      <br />
      <br />
      <br />
    </section>
  );
};

export default Resume;
