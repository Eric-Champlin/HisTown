import React from "react";
import "./Tap.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import NextSteps from "../Hooks/useInViewNextSteps";
import { Link } from "react-router-dom";
import BannerCarousel from "../components/BannerCarousel.tsx";



const Tap = () => {
  return (
    <div>
      <NavBar />
            {/* Banner Section */}
        <BannerCarousel />

      <div style={{ textAlign: "center" }}>
  <h1 className="dance-classes-title">TAP</h1>
  <div className="dance-classes-title-underline-tap"></div>
</div>

<div className="tap-image">
          <img src="https://i.imgur.com/Dx5CC5S.jpeg" alt="Dancers" />
        </div>
        <div className="text-container-acro">

        <p>
        Tap is an excellent class for those who love to make music with their feet, and will focus on developing skills in tap technique, rhythm and coordination. Classes are offered for ages 3 years and up, based on skill level and experience, with beginner, intermediate and advanced tap classes available.        
        
          </p>
          </div>

<Link to="/classes/dance" className="all-dances-button-link">
    <button className="all-dances-button">ALL DANCES</button>
  </Link>

<NextSteps />

      <Footer />
    </div>
  );
};

export default Tap;
