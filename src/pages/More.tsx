import React from "react";
import { Link } from "react-router-dom"; 
import "./More.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import NextSteps from "../Hooks/useInViewNextSteps";
import BannerCarousel from "../components/BannerCarousel.tsx";


const Classes = () => {
  return (
    <div className="classes-page">
      <NavBar />
        <BannerCarousel />


      <h1 className="classes-title">MORE</h1>
      <div className="more-title-underline"></div>

      {/* 3×2 Grid of Cards */}
      <div className="classes-grid">

          <div className="classes-picture">
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
          <div className="classes-picture">
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
          <div className="classes-picture">
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

        <div className="classes-picture">
          <Link to="/more/birthday-parties" className="classes-card-link">
            <div className="classes-card piano-card">
              <img
                src="https://i.imgur.com/wf93bWZ.jpeg"
                alt="Dance Placeholder"
              />
            </div>
            <p className="classes-label">BIRTHDAY PARTIES</p>
          </Link>
        </div>

        <div className="classes-picture">
          <Link to="/more/studio-rental" className="classes-card-link">
            <div className="classes-card violin-card">
              <img
                src="https://i.imgur.com/2Zbu5kk.jpeg"
                alt="Music Placeholder"
              />
            </div>
            <p className="classes-label">STUDIO RENTAL</p>
          </Link>
        </div>

<div className="classes-picture">
  <Link to="/more/contact" className="classes-card-link">
    <div className="classes-card vocal-card">
      <img
        src="https://i.imgur.com/MpqH4d8.png"
        alt="Vocal Placeholder"
      />
    </div>
    <p className="classes-label">CONTACT</p>
  </Link>
</div>



        
      </div>
      <NextSteps />

      <Footer />
    </div>
  );
};

export default Classes;
