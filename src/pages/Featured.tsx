import React from "react";
import { Link } from "react-router-dom"; 
import "./Featured.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import NextSteps from "../Hooks/useInViewNextSteps";


const OtherClasses = () => {
  return (
    <div className="classes-page">
      <NavBar />

      {/* Banner Section */}
      <div className="dance-classes-banner">
        <img
          src="https://i.imgur.com/poLiUHv.png"
          alt="Dance Classes Banner"
          className="dance-classes-banner-image"
        />
      </div>

      {/* Title + Underline */}
      <h1 className="classes-title">FEATURED</h1>
      <div className="featured-title-underline"></div>

      {/* 2×2 Grid of Cards */}
      <div className="classes-grid-2x2">
        {/* Acting Card */}
        <div className="classes-item">
          <Link to="/classes/acting" className="classes-card-link">
            <div className="classes-card">
              <img
                src="https://i.imgur.com/dY4Z2Xq.jpeg"
                alt="Acting Placeholder"
              />
            </div>
            <p className="classes-label">ACTING</p>
          </Link>
        </div>

        {/* Adult Card */}
        <div className="classes-item">
          <Link to="/classes/adult" className="classes-card-link">
            <div className="classes-card">
              <img
                src="https://i.imgur.com/m6x5nEJ.png"
                alt="Adult Placeholder"
              />
            </div>
            <p className="classes-label">ADULT</p>
          </Link>
        </div>

        {/* Company Card */}
        <div className="classes-item">
          <Link to="/classes/company" className="classes-card-link">
            <div className="classes-card">
              <img
                src="https://i.imgur.com/901XcGK.jpeg"
                alt="Company Placeholder"
              />
            </div>
            <p className="classes-label">COMPANY</p>
          </Link>
        </div>

        {/* Goddard Card */}
        <div className="classes-item">
          <Link to="/classes/goddard-school" className="classes-card-link">
            <div className="classes-card">
              <img
                src="https://i.imgur.com/uqQFUpW.png"
                alt="Goddard Placeholder"
              />
            </div>
            <p className="classes-label">GODDARD</p>
          </Link>
        </div>
      </div>
      <NextSteps />

      <Footer />
    </div>
  );
};

export default OtherClasses;
