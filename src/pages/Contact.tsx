import React from "react";
import "./Contact.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import NextSteps from "../Hooks/useInViewNextSteps";

const Contact = () => {
  return (
    <div className="page-wrapper">
      <NavBar />

      {/* Banner Section */}
      <div className="classes-banner">
        <img
          src="https://i.imgur.com/poLiUHv.png"
          alt="Classes Banner"
          className="classes-banner-image"
        />
      </div>

      {/* Page Title */}
      <div style={{ textAlign: "center" }}>
        <h1 className="contact-page-title">CONTACT</h1>
        <div className="underline-contact"></div>
      </div>

      {/* Note Text */}
      <div className="note-text-container">
        <p>
          <strong>Please note that our entrance is at the back of the building!</strong>
        </p>
      </div>

      {/* Contact Form */}
      <div className="contact-form-container">
        <form>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="firstName">First name<span>*</span></label>
              <input type="text" id="firstName" required />
            </div>
            <div className="form-field">
              <label htmlFor="lastName">Last name<span>*</span></label>
              <input type="text" id="lastName" required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label htmlFor="email">Email<span>*</span></label>
              <input type="email" id="email" required />
            </div>
            <div className="form-field">
              <label htmlFor="phone">Mobile phone number</label>
              <input type="tel" id="phone" />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="message">How can we help you?<span>*</span></label>
            <textarea id="message" rows={4} required />
          </div>

          <button type="submit" className="submit-button">SUBMIT</button>
        </form>
      </div>

      <NextSteps />
      <Footer />
    </div>
  );
};

export default Contact;
