import React from "react";
import "./Ballet.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import NextSteps from "../Hooks/useInViewNextSteps";
import { Link } from "react-router-dom";



const Ballet = () => {
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
  <h1 className="dance-classes-title">BALLET</h1>
  <div className="dance-classes-title-underline-ballet"></div>
</div>

<div className="ballet2-image">
          <img src="https://i.imgur.com/XcXifBr.jpeg" alt="Dancers" />
        </div>
        <div className="text-container-acro">

        <p>
        Ballet emphasizes the development of classical ballet skills with a focus on technique as it relates to proper placement, alignment and coordination of legs,footwork and the rest of the body.  Classes are offered for ages 2 years and up, based on skill level and experience, with beginner, intermediate and advanced ballet classes available.  We also have a Teen Beginner Ballet class for dancers ages 11 & up, for those who have never taken any ballet classes before and want to have the opportunity to learn ballet at their own pace before transitioning into a regular ballet class.            </p>
          </div>

<div>
  <Link to="/classes/dance" className="all-dances-button-link">
    <button className="all-dances-button">ALL DANCES</button>
  </Link>
</div>
<NextSteps />

      <Footer />
    </div>
  );
};

export default Ballet;
