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
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Home = () => {
  let history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />

      <section className="top-section">
        <div className="gallery">
          <Carousel autoPlay={true} infiniteLoop={true} dynamicHeight={true}>
            <div>
              <img src="https://i.imgur.com/rCtpE99.jpg" alt="Sink" />
              <h1 className="legend">
                Know before you buy, how clean is the water that is coming
                though the pipes
              </h1>
            </div>
            <div>
              <img src="https://i.imgur.com/BQtYiCQ.jpg" alt="Sink" />
              <h1 className="legend">
                Know before you buy, how clean is the water that is coming
                though the pipes
              </h1>
            </div>
            <div>
              <img src="https://i.imgur.com/MDh3YbI.jpg" alt="Sink" />
              <h1 className="legend">
                Moisture intrusion is never a good thing. Old windows should be
                properly maintained and checked periodically for any signs of
                leaks
              </h1>
            </div>
            <div>
              <img src="https://i.imgur.com/U32tkwu.jpg" alt="Sink" />
              <h1 className="legend">
                An active plumbing leak is a material defect and can cause other
                moisture related problems fast! In Framing around the plumbing
                is rotten and should be replaced and repaired.
              </h1>
            </div>
            <div>
              <img src="https://i.imgur.com/sOrwwtK.jpg" alt="Sink" />
              <h1 className="legend">
                The concrete post is broken with a large vertical crack. The
                Power company should be notified and this should be corrected
              </h1>
            </div>
            <div>
              <img src="https://i.imgur.com/pwPCFVh.jpg" alt="Sink" />
              <h1 className="legend">
                Our inspectors are trained to access all readily accessible
                crawlspaces in order to inspect the plumbing, HVAC ducts,
                insulation and foundation
              </h1>
            </div>
            <div>
              <img src="https://i.imgur.com/OHcds1b.jpg" alt="Sink" />
              <h1 className="legend">
                Vines growing along the side of the house may not appear to be a
                major issue until the vines start growing into the the attic
                through the soffit vents. The overgrown vines can allow moisture
                and pest to enter into the home.
              </h1>
            </div>
            <div>
              <img src="https://i.imgur.com/gpGSQlf.jpg" alt="Sink" />
              <h1 className="legend">
                Notice the small rodent nest found in this low-voltage cable
                box. You can see stored food and chewed coaxial cable exposing
                the wires insulation.
              </h1>
            </div>
          </Carousel>
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
