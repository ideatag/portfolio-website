import React from "react";
import "./skills.css";
import Skill1 from "../../assets/skill-1.png";
import Skill2 from "../../assets/skill-2.png";
import Skill3 from "../../assets/skill-3.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skill-title">My Front-End Developer Skills</span>
      <span className="skill-description">
        I am a front-end developer with over 1 year of experience, motivated to
        aquire new skills and actively seeking new opportunities. Having an
        analytical personality and a keen eye for details, I primarily focus on
        writing clean and efficient code. My main goal is to be part of a
        company that creates interactive and intuitive websites for clients as a
        front-end developer, from a remote position.
      </span>
      <div className="skill-bars">
        <div className="skill-bar">
          <img src={Skill1} alt="skill-1" className="skill-bar-img" />
          <div className="skill-bar-text">
            <h2>HTML, CSS, JavaScript</h2>
            <ul>
              <li>
                Proficient in writing clean and semantic HTML5 code for
                structuring web content.
              </li>
              <li>
                Experience with CSS3 for styling and layout, including Flexbox
                and Grid.
              </li>
              <li>
                Basic understanding of responsive design principles to create
                mobile-friendly websites.
              </li>
              <li>
                Working knowledge of JavaScript and ES6+ features for
                interactive and dynamic web pages.
              </li>
              <li>
                Familiarity with front-end libraries/frameworks such as
                React.js.
              </li>
            </ul>
          </div>
        </div>
        <div className="skill-bar">
          <img src={Skill2} alt="Skill2" className="skill-bar-img" />
          <div className="skill-bar-text">
            <h2>Git, GitHub</h2>
            <ul>
              <li>
                Version Control with Git: Proficient in using Git for tracking
                changes, managing branches, and collaborating with team members.
              </li>
              <li>
                GitHub: Extensive experience with GitHub for hosting
                repositories, managing pull requests, and facilitating
                collaborative development workflows.
              </li>
              <li>
                Git Branching and Merging: Skillful in creating and managing
                branches, resolving merge conflicts, and ensuring a clean
                version history.
              </li>
              <li>
                Collaborative Development: Experience in working with remote
                teams through Git and GitHub, facilitating smooth collaboration
                and code integration.
              </li>
            </ul>
          </div>
        </div>
        <div className="skill-bar">
          <img src={Skill3} alt="Skill3" className="skill-bar-img" />
          <div className="skill-bar-text">
            <h2>React, Node.js</h2>
            <ul>
              <li>
                Proficient in building responsive and interactive user
                interfaces using React.js.
              </li>
              <li>
                Knowledge of modern front-end development tools and bundlers
                (Webpack, Babel).
              </li>
              <li>
                Understanding of component-based architecture and reusable UI
                patterns.
              </li>
              <li>
                Familiarity with Node.js and npm for building scalable and
                efficient server-side applications.
              </li>
              <li>
                Version Control: Proficient in using Git for collaborative
                development and code versioning.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
