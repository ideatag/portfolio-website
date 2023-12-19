import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { ContactSocialMediaData } from "./ContactSocialMediaData";
import ContactSocialMediaCard from "./ContactSocialMediaCard";

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
          In order to discuss any work opportunities please fill out the form
          below.
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
          <div className="contact-social-media">
            {ContactSocialMediaData.map((item) => (
              <ContactSocialMediaCard key={item.altText} area={item} />
            ))}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
