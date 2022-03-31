import React from "react";
import aboutPic from "../assets/images/profile-pic.jpg";

const Landing = () => {
  return (
    <section>
      <div className="landingHeader">
        <img
          src={aboutPic}
          className="profile-photo"
          style={{ width: "100%" }}
          alt="Profile Side View"
        />
      </div>
      <div className="landingText">
        <h1>Hello. I'm David.</h1>
        <h2>Full Stack Web Developer</h2>
        <h2>Manager | Chef | Builder</h2>
      </div>
      <br />
      <br />
    </section>
  );
};

export default Landing;
