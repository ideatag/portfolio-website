import React from "react";
import "./intro.css";
import bg from "../../assets/image.png";

function Intro() {
  return (
    <section id="intro">
      <div className="intro-content">
        <span className="hello">Hello,</span>
        <span className="intro-text">
          I'm <span className="intro-name">Razvan</span>
          <br />
          Front-End Developer
        </span>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
}

export default Intro;
