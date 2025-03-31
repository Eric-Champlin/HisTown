import React from "react";
import { Link } from "react-router-dom"; 
import "./Store.css";
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
      <h1 className="classes-title">STORE</h1>
      <div className="music-title-underline"></div>

      {/* 3×2 Grid of Cards */}
      <div className="classes-grid">
        {/* 1. Hats */}
        <div className="classes-picture">
          <div className="classes-card-link">
            <div className="classes-card piano-card">
              <img
                src="https://i.imgur.com/LLEWvWq.png"
                alt="Hats Placeholder"
              />
            </div>
            <p className="classes-label">HATS</p>
          </div>
        </div>

        {/* 2. Shirts */}
        <div className="classes-picture">
          <div className="classes-card-link">
            <div className="classes-card piano-card">
              <img
                src="https://i.imgur.com/1aOIe3s.png"
                alt="Shirts Placeholder"
              />
            </div>
            <p className="classes-label">SHIRTS</p>
          </div>
        </div>

        {/* 3. Pants */}
        <div className="classes-picture">
          <div className="classes-card-link">
            <div className="classes-card piano-card">
              <img
                src="https://i.imgur.com/qVYiIsG.png"
                alt="Pants Placeholder"
              />
            </div>
            <p className="classes-label">PANTS</p>
          </div>
        </div>
      </div>

      {/* Merch Message */}
      <div className="merch-message">
        <p>Please drop by the studio to pick up your merch!</p>
      </div>

      <NextSteps />

      <Footer />
    </div>
  );
};

export default Classes;
