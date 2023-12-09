import React from "react";
import "./intro.css";
import bg from "../../assets/image.png";

function Intro() {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Razvan</span>
          <br />
          Front-End Developer
        </span>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
}

export default Intro;
