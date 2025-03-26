import React from "react";
import { Link } from "react-router-dom"; 
import "./FAQ.css";
import NavBar from "../components/NavBar.tsx";
import Footer from "../components/Footer.tsx";
import NextSteps from "../Hooks/useInViewNextSteps.tsx";


const Classes = () => {
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
      <h1 className="classes-title">FAQ</h1>
      <div className="classes-FAQ-underline"></div>

      {/* 3×2 Grid of Cards */}
      <div className="classes-grid">

        {/* 1. Dance */}
        <div className="classes-item">
          <Link to="/classes/class-schedule" className="classes-card-link">
            <div className="classes-card">
              <img
                src="https://i.imgur.com/aiEuRfl.jpeg"
                alt="Dance Placeholder"
              />
            </div>
            <p className="classes-label">SCHEDULE</p>
          </Link>
        </div>

        {/* 2. Music */}
        <div className="classes-item">
          <Link to="/classes/dress-code" className="classes-card-link">
            <div className="classes-card">
              <img
                src="https://i.imgur.com/Ymk6vU6.png"
                alt="Music Placeholder"
              />
            </div>
            <p className="classes-label">DRESS CODE</p>
          </Link>
        </div>

        {/* 3. Acting */}
        <div className="classes-item">
          <Link to="/classes/tuition-and-fees" className="classes-card-link">
            <div className="classes-card">
              <img
                src="https://i.imgur.com/2bGm8KA.jpeg"
                alt="Acting Placeholder"
              />
            </div>
            <p className="classes-label">TUITION</p>
          </Link>
        </div>

        {/* 4. Adult */}
        
      </div>
      <NextSteps />

      <Footer />
    </div>
  );
};

export default Classes;
