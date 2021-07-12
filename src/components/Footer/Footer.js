import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
      <h1>True Inspections Services</h1>
        <div className="footer-links open-sans">
          <Link to="/about" className="footer-about-link link">
            ABOUT US
          </Link>
          <Link to="/contact" className="footer-contact-link link">
            CONTACT US
          </Link>
          
          <a href="../Agreements/InterNACHI_Standards_of_Practice.pdf" className="footer-faqs-link link" download>AGREEMENT</a>
        </div>
        <div className="call open-sans">
          <div className="call-btn">CALL ME NOW</div>
          <h1>(407) 443-3800</h1>
        </div>
      </footer>

      <div className="copyright">
        <p>Copyright © 2020 True Inspections Services of Central Florida - All Rights Reserved</p>
      </div>
    </>
  );
};

export default Footer;
