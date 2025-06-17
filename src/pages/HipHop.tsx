import React from "react";
import "./HipHop.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import NextSteps from "../Hooks/useInViewNextSteps";
import { Link } from "react-router-dom";



const HipHop = () => {
  return (
    <div>
      <NavBar />
            {/* Banner Section */}
            <div className="classes-banner">
        <img
          src="https://i.imgur.com/poLiUHv.png"
          alt="Classes Banner"
          className="classes-banner-image"
        />
      </div>
      <div style={{ textAlign: "center" }}>
  <h1 className="dance-classes-title">HIP-HOP</h1>
  <div className="dance-classes-title-underline-hiphop"></div>
</div>

<div className="hiphop-image2">
          <img src="https://i.imgur.com/3WDWmub.png" alt="Dancers" />
        </div>
        <div className="text-container-acro">

        <p>
        Hip-hop highlights the vibrancy and relevancy of dance in our culture today. Combining emotion and an uniqueness to the style itself, students are encouraged to create something new and find their own sense of style. Classes are offered for ages 3 years and up, based on skill level and experience, with beginner, intermediate and advanced hip-hop classes available.        </p>
        </div>

<Link to="/classes/dance" className="all-dances-button-link">
    <button className="all-dances-button">ALL DANCES</button>
  </Link>

<NextSteps />

      <Footer />
    </div>
  );
};

export default HipHop;
