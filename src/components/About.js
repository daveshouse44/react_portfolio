import React from 'react';
import aboutPic from "../assets/images/profile-pic.jpg";

const About = () => {
    return (
        <section>
            <h1>About me</h1>
            <img src={aboutPic} className="profile-photo" style={{ width: "100%"}} alt="Profile Side View" />
            <p>With diverse talent in many industries, newly aquired full MERN stack development skills, ample managment and consultation experience, I am eager to help in interesting web development projects available.
            </p>
            <p>On top of front-end and back-end web development, I have vast experience in restaurant design and managment, food safety and logistics, private catering, general construction, remodeling and repairs.
            </p>
            <p>
            When I'm not busy with work or personal projects, I enjoy cooking delicious meals, checking new cuisine in town, and outdoor adventures with my family!
            </p>
        </section>
    )
};

export default About;