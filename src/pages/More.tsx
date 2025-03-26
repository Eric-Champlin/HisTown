import React from "react";
import { Link } from "react-router-dom"; 
import "./More.css";
import NavBar from "../components/NavBar.tsx";
import Footer from "../components/Footer.tsx";
import NextSteps from "../Hooks/useInViewNextSteps.tsx";


const Classes = () => {
  return (
    <div className="classes-page">
      <NavBar />

      {/* Banner Section */}
      <div className="classes-banner">
        <img
          src="https://i.imgur.com/poLiUHv.png"
          alt="Classes Banner"
          className="classes-banner-image"
        />
      </div>

      {/* Title + Underline */}
      <h1 className="classes-title">MORE</h1>
      <div className="more-title-underline"></div>

      {/* 3×2 Grid of Cards */}
      <div className="classes-grid">

        {/* 1. Dance */}
        <div className="classes-picture">
          <Link to="" className="classes-card-link">
            <div className="classes-card piano-card">
              <img
                src="https://i.imgur.com/wf93bWZ.jpeg"
                alt="Dance Placeholder"
              />
            </div>
            <p className="classes-label">Birthday Parties</p>
          </Link>
        </div>

        {/* 2. Music */}
        <div className="classes-picture">
          <Link to="/more/studio-rental" className="classes-card-link">
            <div className="classes-card violin-card">
              <img
                src="https://i.imgur.com/BjWtbmd.jpeg"
                alt="Music Placeholder"
              />
            </div>
            <p className="classes-label">Studio Rental</p>
          </Link>
        </div>

{/* 3. Vocal */}
<div className="classes-picture">
  <Link to="/more/contact" className="classes-card-link">
    <div className="classes-card vocal-card">
      <img
        src="https://i.imgur.com/MpqH4d8.png"
        alt="Vocal Placeholder"
      />
    </div>
    <p className="classes-label">Contact</p>
  </Link>
</div>



        
      </div>
      <NextSteps />

      <Footer />
    </div>
  );
};

export default Classes;
