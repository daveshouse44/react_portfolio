import React from "react";
import aboutPic from "../assets/images/profile-pic.jpg";

const About = () => {
  return (
    <section>
      <div className="aboutHeader">
        <h1>About me:</h1>
        <img
          src={aboutPic}
          className="profile-photo"
          style={{ width: "100%" }}
          alt="Profile Side View"
        />
      </div>
      <div className="aboutText">
        <p>
          All my life I have been curious how things are made and how they work.
          My focus now is software development. I enjoy programming because I
          can work on design, user enjoyment, data management, and security.
        </p>
        <p>
          I am a Full Stack Web Developer leveraging a management background to
          see projects though from planning to completion. I recently earned a
          certificate in Full Stack Web Development from University of Minnesota
          College of Continuing and Professional Studies. I have skills in HTML,
          CSS, JavaScript, React.js, Node.js, responsive web design and
          strengths in meeting deadlines, creativity, and teamwork.
        </p>
        <p>
          I am excited to develop responsive websites, dynamic applications, and
          secure server hosting. I am eager to work with teams looking to apply
          quality UX, design interactive websites, and use problem-solving
          focused abilities.
        </p>
        <p>
          On top of front-end and back-end web MERN Stack Development, I have
          vast experience in restaurant design, management, food safety,
          logistics, private catering, general construction, remodeling and
          repairs.
        </p>
        <p>
          When I'm not busy with work or personal projects, I enjoy cooking
          delicious meals, checking new cuisine in town, bowling, disc golf, and
          outdoor adventures with my family!
        </p>
      </div>
    </section>
  );
};

export default About;
