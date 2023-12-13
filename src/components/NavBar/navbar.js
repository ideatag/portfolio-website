import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import contactImg from "../../assets/contact.png";
import { Link } from "react-scroll";
import menu from "../../assets/menu.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <Link
        to="intro"
        spy={true}
        smooth={true}
        offset={-200}
        duration={500}
        className="logo"
      >
        <img src={logo} width={72} height={68} alt="Logo" />
      </Link>
      <div className="desktop-menu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-200}
          duration={500}
          className="desktop-menu-list-item"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktop-menu-list-item"
        >
          Skills
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktop-menu-list-item"
        >
          Projects
        </Link>
      </div>
      <button
        className="desktop-menu-button"
        onClick={() => {
          const contactElement = document.getElementById("contact");
          if (contactElement) {
            const offset = -100;
            const elementPosition =
              contactElement.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
              top: elementPosition + offset,
              behavior: "smooth",
            });
          }
        }}
      >
        <img src={contactImg} alt="" className="desktop-menu-img" />
        Contact Me
      </button>
      <img
        src={menu}
        alt="menu"
        className="mobile-menu"
        onClick={() => setShowMenu(!showMenu)}
      />
      <div
        className="navbar-menu"
        style={{ display: showMenu ? "flex" : "none" }}
      >
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-200}
          duration={500}
          className="list-item"
          onClick={() => setShowMenu(false)}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="list-item"
          onClick={() => setShowMenu(false)}
        >
          Skills
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="list-item"
          onClick={() => setShowMenu(false)}
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="list-item"
          onClick={() => setShowMenu(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
