import React from "react";
import { Link } from "react-router-dom"; 
import "./About.css";
import NavBar from "../components/NavBar.tsx";
import Footer from "../components/Footer.tsx";
import NextSteps from "../Hooks/useInViewNextSteps.tsx";


const About = () => {
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
      <h1 className="classes-title">ABOUT</h1>
      <div className="about-title-underline"></div>

      {/* 2×2 Grid of Cards */}
      <div className="classes-grid-2x2">
        {/* Acting Card */}
        <div className="classes-item">
          <Link to="/about/our-team" className="classes-card-link">
            <div className="classes-card">
              <img
                src="https://i.imgur.com/H0VTGeM.png"
                alt="Acting Placeholder"
              />
            </div>
            <p className="classes-label">Our Team</p>
          </Link>
        </div>

        {/* Adult Card */}
        <div className="classes-item">
          <Link to="/about/our-story" className="classes-card-link">
            <div className="classes-card">
              <img
                src="https://i.imgur.com/lanA5dp.jpeg"
                alt="Adult Placeholder"
              />
            </div>
            <p className="classes-label">Our Story</p>
          </Link>
        </div>

        {/* Company Card */}
        <div className="classes-item">
          <Link to="/about/testimonials" className="classes-card-link">
            <div className="classes-card">
              <img
                src="https://i.imgur.com/Kau78rI.png"
                alt="Company Placeholder"
              />
            </div>
            <p className="classes-label">Testimonials</p>
          </Link>
        </div>

        {/* Goddard Card */}
        <div className="classes-item">
          <Link to="/about/photos-videos" className="classes-card-link">
            <div className="classes-card">
              <img
                src="https://i.imgur.com/38PnP0v.jpeg"
                alt="Goddard Placeholder"
              />
            </div>
            <p className="classes-label">Photos/Videos</p>
          </Link>
        </div>
      </div>
      <NextSteps />

      <Footer />
    </div>
  );
};

export default About;
