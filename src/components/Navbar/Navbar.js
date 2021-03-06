import React, { useState } from "react";
import "./Navbar.css";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  if (isOpen) {
    document.getElementsByTagName("body")[0].style.overflowY = "hidden";
  } else {
    document.getElementsByTagName("body")[0].style.overflowY = "visible";
  }
  return (
    <div className="navbar" style={{ overflow: "hidden !important" }}>
      <div className="menu">
        <Menu
          customBurgerIcon={
            <img src="https://i.imgur.com/M1SyJcd.png" alt="Menu" />
          }
          width={"100%"}
          onOpen={() => setIsOpen(true)}
          onClose={() => setIsOpen(false)}
          isOpen={isOpen}
        >
          <Link to="/" id="home" className="menu-item-home menu-item">
            HOME
          </Link>
          <Link to="/about" id="about" className="menu-item">
            ABOUT US
          </Link>
          <Link to="/contact" id="contact" className=" menu-item">
            CONTACT US
          </Link>

          <Link to="/certifications" className=" menu-item">
            CERTIFICATIONS
          </Link>

          <Link to="/gallery" className=" menu-item">
            GALLERY
          </Link>

          <a
            href="../Agreements/Pre-Inspection_agreement.docx"
            className="menu-item"
            download
          >
            AGREEMENT
          </a>

          <a
            href="../Agreements/InterNACHI_Standards_of_Practice.pdf"
            className="menu-item"
            download
          >
            STANDARDS OF PRACTICE
          </a>
        </Menu>
      </div>
      <div className="navbar-header">
        <Link to="/" id="home">
          True Inspections Services of Central Florida
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
