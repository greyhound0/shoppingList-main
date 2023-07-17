import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
const About = () => {
  const navigate = useNavigate("");
  return (
    <div className="about">
      <button onClick={() => navigate("/")} className="home">
        Home
      </button>
      <h3>
        I'm a react web developer with 1 year of experience in web development
        as a Front-End Developer in a Startup. I love creating responsive
        websites using ReactJS, JavaScript, HTML5, CSS3, Bootstrap & Github.
        I've done multiple small projects to learn basics and now doing more
        complex projects.
      </h3>

      <p className="lead">
        <img
          className="me-2"
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
          alt="html5"
          width="40"
          height="40"
        />
        <img
          className="m-2"
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
          alt="css3"
          width="40"
          height="40"
        />
        <img
          className="m-2"
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
          alt="javascript"
          width="30"
          height="35"
        />
        <img
          className="m-2"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          alt="react"
          width="35"
          height="35"
        />
        <img
          className="m-2"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
          alt="vscode"
          width="35"
          height="35"
        />
      </p>
    </div>
  );
};

export default About;
