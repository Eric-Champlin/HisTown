import React from "react";
import { Link } from "react-router-dom"; 
import "./Classes.css";
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
      <h1 className="classes-title">CLASSES</h1>
      <div className="classes-title-underline"></div>

      {/* 3×2 Grid of Cards */}
      <div className="classes-grid">

        {/* 1. Dance */}
        <div className="classes-item">
          <Link to="/classes/dance" className="classes-card-link">
            <div className="classes-card">
              <img
                src="https://i.imgur.com/bY372Jx.jpeg"
                alt="Dance Placeholder"
              />
            </div>
            <p className="classes-label">DANCE</p>
          </Link>
        </div>

        {/* 2. Music */}
        <div className="classes-item">
          <Link to="/classes/music" className="classes-card-link">
            <div className="classes-card">
              <img
                src="https://i.imgur.com/k8zKpaF.jpeg"
                alt="Music Placeholder"
              />
            </div>
            <p className="classes-label">MUSIC</p>
          </Link>
        </div>

        {/* 3. Acting */}
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

        {/* 4. Adult */}
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

        {/* 5. Company */}
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

        {/* 6. Goddard */}
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

export default Classes;
