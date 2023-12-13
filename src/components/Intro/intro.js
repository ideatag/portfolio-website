import React from "react";
import "./Intro.css";
import Profile from "../../assets/profile-img.png";

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
      <img src={Profile} alt="Profile" className="profile-img" />
    </section>
  );
}

export default Intro;
