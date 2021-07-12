import React, { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Contact.css";
import axios from "axios";
import { Button, Segment, Dimmer, Loader, Modal } from "semantic-ui-react";

const Contact = () => {
  const [formState, setFormState] = useState({
    first_name: "",
    last_name: "",
    entity: "",
    phone: "",
    email: "",
  });

  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setOpen(true);
    axios
      .post("https://dallas-emailer.herokuapp.com/", formState)
      .then((res) => {
        console.log(res, "RESPONSE FROM SENDING EMAIL");
        setSuccess(true);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        className="facebook-modal"
      >
        {success ? (
          <Modal.Header>Success</Modal.Header>
        ) : (
          <Modal.Header>Sending Email</Modal.Header>
        )}

        {success ? (
          <Modal.Content>
            <h1>True Inspections Services will reach out to you shortly !</h1>
          </Modal.Content>
        ) : (
          <Modal.Content>
            <Segment>
              <Dimmer active inverted>
                <Loader inverted>Loading</Loader>
              </Dimmer>
            </Segment>
          </Modal.Content>
        )}

        <Modal.Actions>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </Modal.Actions>
      </Modal>
      <Navbar />
      <div className="contact">
        <div className="contact-top">
          <h1 className="contact-top-header times ">CONTACT US</h1>
          <img
            src="https://i.imgur.com/DaOjg6n.png"
            alt="Phone"
            className="contact-image"
          />
          <p className="contact-link">dallasisominspections@gmail.com</p>
        </div>
        <form className="contact-form" onSubmit={sendEmail}>
          <div className="contact-form-top">
            <input
              type="text"
              name="first_name"
              value={formState.first_name}
              placeholder="FIRST NAME*"
              className="contact-input open-sans"
              onChange={handleChange}
            />
            <input
              type="text"
              name="last_name"
              value={formState.last_name}
              placeholder="LAST NAME*"
              className="contact-input open-sans"
              onChange={handleChange}
            />
          </div>
          <div className="contact-form-middle">
            <input
              type="text"
              name="entity"
              value={formState.entity}
              placeholder="TYPE OF INSPECTION"
              className="contact-input-long open-sans"
              onChange={handleChange}
            />
          </div>
          <div className="contact-form-bottom">
            <input
              type="text"
              name="phone"
              value={formState.phone}
              placeholder="PRIMARY PHONE NUMBER*"
              className="contact-input open-sans"
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              value={formState.email}
              placeholder="EMAIL ADDRESS*"
              className="contact-input open-sans"
              onChange={handleChange}
            />
          </div>
          <div className="contact-form-submit open-sans" onClick={sendEmail}>
            SUBMIT
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
