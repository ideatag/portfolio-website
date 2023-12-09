import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDescription">
        I am a front-end developer with over 1 year of experience, motivated to
        aquire new skills and actively seeking new opportunities. Having an
        analytical personality and a keen eye for details, I primarily focus on
        writing clean and efficient code. My main goal is to be part of a
        company that creates interactive and intuitive websites for clients as a
        front-end developer, from a remote position.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam dolore enim recusandae quo veritatis, hic ab? Id
              deleniti aut corporis pariatur esse! Velit amet eos pariatur. Hic
              ad vitae numquam.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Website Design</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptates magnam, facilis fugiat necessitatibus minima deleniti
              nobis quidem molestias similique, dicta ullam eligendi commodi
              itaque asperiores eius quas nemo quo dolores?
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>App Design</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              nulla tempore incidunt pariatur. Quia nostrum corrupti, nihil
              voluptatum iste optio quos! Cupiditate, sint fugiat quaerat
              tempora autem at quia doloremque.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
