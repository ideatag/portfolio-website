import React from "react";

const ContactSocialMediaCard = ({ area: { link, image, altText } }) => (
  <div>
    <a href={link}>
      <img className="contact-social-media-icon" src={image} alt={altText} />
    </a>
  </div>
);

export default ContactSocialMediaCard;
