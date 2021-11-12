import React from 'react';

const Resume = () => {

    return (
        <section>
            <h1>
                Resume
            </h1>
            <p>Checkout my <a href="https://drive.google.com/file/d/11fyZIj1WSbo1IxztGDIzAUxf06V4z1VK/view?usp=sharing" target="_blank" rel="noreferrer">resume</a></p>
            <h3>Front-end Skills</h3>
            <ul className="resumeList">
                <li>HTML</li>
                <li>CSS</li>
                <li>javascript</li>
                <li>JQuery</li>
                <li>React</li>
                <li>Bootstrap</li>
                <li>Tailwind CSS</li>

            </ul>
            <h3>Back-end Skills</h3>
            <ul className="resumeList">
                <li>Node</li>
                <li>MySQL</li>
                <li>APIs</li>
                <li>Mongo</li>
                <li>Insomnia</li>
                <li>Heroku</li>
                <li>GraphQL</li>
                
            </ul>
        </section>
    )
}

export default Resume;