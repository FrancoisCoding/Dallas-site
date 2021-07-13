import React, { useEffect } from "react";
import "./Home.css";
import { useHistory } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import {
  GiIsland,
  GiWaterDrop,
  GiChimney,
  GiCeilingLight,
  GiHalfBodyCrawling,
  GiHeatHaze,
  GiPowerLightning,
  GiHomeGarage,
  GiRat,
} from "react-icons/gi";

const Home = () => {
  let history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />

      <section className="top-section">
        <div className="home-hero">
          <img
            src="https://i.imgur.com/Iub1jHA.jpg"
            alt="True Inspection Logo"
            className="home-logo"
          />
        </div>
        <div className="top-section-info">
          <div className="top-section-info-text">
            <p>CALL FOR CONSULTATION</p>
            <p>VETERAN DISCOUNTS OFFERED</p>
          </div>
          <div className="contact-btn" onClick={() => history.push("/contact")}>
            CONTACT US
          </div>
        </div>
      </section>

      <main className="main-section">
        <h1 className="main-header">Services Offered:</h1>
        <h1 className="main-subheader">
          Standard Home Inspection~Typically takes 2-3 hrs. Includes the
          following:
        </h1>

        <div className="icon-section">
          <div className="icon-info">
            <GiIsland className="home-icon" />
            <p>Exterior landscape (drainage and grading) and structure</p>
          </div>

          <div className="icon-info">
            <GiWaterDrop className="home-icon" />
            <p>Foundation movement and water penetration</p>
          </div>

          <div className="icon-info">
            <GiChimney className="home-icon" />
            <p>
              Roof, vents, chimney, flashings and trim, gutters and downspouts
            </p>
          </div>

          <div className="icon-info">
            <GiCeilingLight className="home-icon" />
            <p>Skylights, eaves, soffit and fascia</p>
          </div>

          <div className="icon-info">
            <GiHalfBodyCrawling className="home-icon" />
            <p>Foundation, crawlspace and basement</p>
          </div>

          <div className="icon-info">
            <GiHeatHaze className="home-icon" />
            <p>HVAC</p>
          </div>

          <div className="icon-info">
            <GiPowerLightning className="home-icon" />
            <p>Interior plumbing and electrical</p>
          </div>

          <div className="icon-info">
            <GiHomeGarage className="home-icon" />
            <p>Garage doors, safety sensors and openers</p>
          </div>

          <div className="icon-info">
            <GiRat className="home-icon" />
            <p>Rodent and wood-destroying organism detection</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
