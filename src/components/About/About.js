import React, { useEffect } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./About.css";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />

      <section className="section-about">
        <div className="bio-left">
          <div className="bio-left-title times">
            <span className="about-title-container">
              <img src="https://i.imgur.com/EglrvBx.png" alt="Triangle" />
              <h1 className="about-title-text">ABOUT</h1>
            </span>
            <h1 className="dallas-title-text">True Inspections</h1>
          </div>
          <div className="about-text open-sans">
            <p className="first-paragraph">
              Procuring a home inspection is the first investment that every
              home buyer should make before making one of the most momentous
              purchases of their life. It is important to know the truth about
              what you are buying by having a well-qualified inspector take a
              closer look at your potential home. The structure/ foundation, the
              roof, electrical system, HVAC, plumbing, and a visual scan of any
              wood-destroying organisms, as well as rodents, are all components
              of what our home inspection entails.
            </p>
            <p>
              Finding any deficiencies before purchasing your home, not only
              forestalls unnecessary stress but also gives the homebuyer a
              variety of negotiating points to bring up when closing a deal on
              their new home.
            </p>
          </div>
        </div>
        <div className="bio-right">
          <img src="https://i.imgur.com/e1FgCtH.jpg" alt="Dallas" />
        </div>
      </section>

      <section className="why">
        <h1 className="why-header">WHY HIRE</h1>
        <h1 className="why-header">TRUE INSPECTIONS?</h1>
        <p className="why-text">
          True Inspection Services is a family-owned business that takes pride
          in assuring the safety of families all over Central Florida. We are
          committed to providing fast service and comprehensive same-day reports
          while offering the most cost-effective prices. We are fully licensed
          by the state of Florida (License #HI13908 )
        </p>
        <div className="why-cards">
          <div className="why-card open-sans">
            <h2 className="why-card-header">It’s Affordable</h2>
            <p className="why-card-text">
              Starts @$300 for a small 2 bedroom home or manufactured home.
              Rates starting out @ $400 for larger homes
            </p>
          </div>
          <div className="why-card">
            <h2 className="why-card-header">Excellence is our Standard</h2>
            <p className="why-card-text">
              Wind mitigation inspection starts @ $100, if no other services are
              being provided (call for consultation). 4-point inspections starts
              @ $100. Emergency tarping call for pricing.
            </p>
          </div>
        </div>
        <p className="why-text">
          Pre-inspection agreement: <br />
          4-point Pre-inspection agreement:{" "}
          <span className="why-text-link">www.example.com</span>
          <br />
          Entire Home Pre-Inspection agreement:{" "}
          <span className="why-text-link">www.example.com</span>
        </p>
      </section>

      <Footer />
    </div>
  );
};

export default About;
