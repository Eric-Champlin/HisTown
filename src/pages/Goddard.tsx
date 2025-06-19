import React from "react";
import "./Goddard.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import NextSteps from "../Hooks/useInViewNextSteps";
import { Link } from "react-router-dom";




const Goddard = () => {
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
  <h1 className="dance-classes-title">Goddard School</h1>
  <div className="dance-classes-title-underline-goddard"></div>
</div>


<div className="company-image">
          <img src="https://i.imgur.com/QGvYbSX.png" alt="Dancers" />
        </div>
        <div className="text-container-acro">

        <p>
Was this removed from HisTown's website?

        </p>
          </div>

        <div className="goddard-buttons-container">
            <Link to="/classes">
                <button className="dance-button">ALL CLASSES</button>
            </Link>
            <Link to="/about/our-team">
                <button className="dance-button">OUR TEAM</button>
            </Link>
        </div>

<NextSteps />

      <Footer />
    </div>
  );
};

export default Goddard;
