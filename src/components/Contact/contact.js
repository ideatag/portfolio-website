import React, { useRef } from "react";
import "./contact.css";
import FacebookIcon from "../../assets/facebook.png";
import LinkedInIcon from "../../assets/linkedin.png";
import YoutubeIcon from "../../assets/youtube.png";
import InstagramIcon from "../../assets/instagram.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5qo9fjm",
        "template_miz92cp",
        form.current,
        "1To8-6Kpkc5VDrS69"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("E-mail Sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact-page">
      <div id="contact">
        <h1 className="contact-page-title">Contact Me</h1>
        <span className="contact-description">
          Please fill out the form below to discuss any work opportunities.
        </span>
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="your_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your E-mail"
            name="your_email"
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your message"
          ></textarea>
          <button type="submit" value="Send" className="submit-button">
            Submit
          </button>
          <div className="links">
            <img src={FacebookIcon} alt="Facebook" className="link" />
            <img src={LinkedInIcon} alt="LinkedIn" className="link" />
            <img src={YoutubeIcon} alt="Youtube" className="link" />
            <img src={InstagramIcon} alt="Instagram" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
