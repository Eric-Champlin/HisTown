import React from "react";
import "./Modern.css";
import NavBar from "../components/NavBar.tsx";
import Footer from "../components/Footer.tsx";
import NextSteps from "../Hooks/useInViewNextSteps.tsx";
import { Link } from "react-router-dom";



const Modern = () => {
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
  <h1 className="dance-classes-title">MODERN</h1>
  <div className="dance-classes-title-underline-modern"></div>
</div>

<div className="modern-image">
          <img src="https://i.imgur.com/ZbziwkN.png" alt="Dancers" />
        </div>
        <div className="text-container-acro">

        <p>
        Modern emphasizes the use of the floor for centering and grounding oneself in movement. Concepts of over curve/under curve and contraction/release musicality and rhythm will be explored. Graham and Limon technique are both taught.  Classes are offered for ages 10 years and up, based on skill level and experience, with beginner, intermediate and advanced modern classes available.        </p>
          </div>

<Link to="/classes/dance" className="all-dances-button-link">
    <button className="all-dances-button">ALL DANCES</button>
  </Link>

<NextSteps />

      <Footer />
    </div>
  );
};

export default Modern;
