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
          I am a Full Stack Web Developer leveraging a management background to
          see projects though from planning to completion. I recently earned a
          certificate in Full Stack Web Development from University of Minnesota
          College of Continuing and Professional Studies. I have skills in HTML,
          CSS, JavaScript, React.js, Node.js, responsive web design and
          strengths in meeting deadlines, creativity, and teamwork. I am excited
          to develop responsive websites, dynamic applications, and secure
          server hosting. I am eager to work with teams looking to apply quality
          UX, design interactive websites, and use problem-solving focused
          abilities.
        </p>
        <p>
          On top of front-end and back-end web MERN Stack Development, I have
          vast experience in restaurant design, management, food safety,
          logistics, private catering, general construction, remodeling and
          repairs.
        </p>
        <p>
          When I'm not busy with work or personal projects, I enjoy cooking
          delicious meals, checking new cuisine in town, and outdoor adventures
          with my family!
        </p>
      </div>
      <br />
      <br />
    </section>
  );
};

export default About;
