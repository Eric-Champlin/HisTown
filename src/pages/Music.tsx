import React from "react";
import { Link } from "react-router-dom"; 
import "./Music.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import NextSteps from "../Hooks/useInViewNextSteps";
import BannerCarousel from "../components/BannerCarousel.tsx";


const Classes = () => {
  return (
    <div className="classes-page">
      <NavBar />

      {/* Banner Section */}
        <BannerCarousel />


      {/* Title + Underline */}
      <h1 className="classes-title">MUSIC</h1>
      <div className="music-title-underline"></div>

      {/* 3×2 Grid of Cards */}
      <div className="classes-grid">

        {/* 1. Dance */}
        <div className="classes-picture">
          <Link to="/classes/piano-lessons" className="classes-card-link">
            <div className="classes-card piano-card">
              <img
                src="https://i.imgur.com/zYc8QQs.png"
                alt="Dance Placeholder"
              />
            </div>
            <p className="classes-label">PIANO</p>
          </Link>
        </div>

        {/* 2. Music */}
        <div className="classes-picture">
          <Link to="/classes/violin-lessons" className="classes-card-link">
            <div className="classes-card violin-card">
              <img
                src="https://i.imgur.com/P7RVvAP.png"
                alt="Music Placeholder"
              />
            </div>
            <p className="classes-label">VIOLIN</p>
          </Link>
        </div>

{/* 3. Vocal */}
<div className="classes-picture">
  <Link to="/classes/vocal-lessons" className="classes-card-link">
    <div className="classes-card vocal-card">
      <img
        src="https://i.imgur.com/NfRzujt.png"
        alt="Vocal Placeholder"
      />
    </div>
    <p className="classes-label">VOCAL</p>
  </Link>

</div>




      </div>


        <Link to="/about/our-team" className="all-music-button-link">
            <button className="all-music-button">OUR TEAM</button>
        </Link>
      <NextSteps />

      <Footer />
    </div>
  );
};

export default Classes;
