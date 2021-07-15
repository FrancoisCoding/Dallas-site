import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Gallery.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Gallery = () => {
  return (
    <div>
      <Navbar />

      <div className="gallery">
        <Carousel autoPlay={true} infiniteLoop={true} dynamicHeight={true}>
          <div>
            <img src="https://i.imgur.com/rCtpE99.jpg" alt="Sink" />
            <h1 className="legend">
              Know before you buy, how clean is the water that is coming though
              the pipes
            </h1>
          </div>
          <div>
            <img src="https://i.imgur.com/BQtYiCQ.jpg" alt="Sink" />
            <h1 className="legend">
              Know before you buy, how clean is the water that is coming though
              the pipes
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
              moisture related problems fast! The framing around the plumbing is
              rotten and should be replaced and repaired.
            </h1>
          </div>
          <div>
            <img src="https://i.imgur.com/sOrwwtK.jpg" alt="Sink" />
            <h1 className="legend">
              The concrete post is broken with a large vertical crack. The Power
              company should be notified and this should be corrected
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
              Notice the small rodent nest found in this low-voltage cable box.
              You can see stored food and chewed coaxial cable exposing the
              wires insulation.
            </h1>
          </div>
        </Carousel>
      </div>

      <Footer />
    </div>
  );
};

export default Gallery;
