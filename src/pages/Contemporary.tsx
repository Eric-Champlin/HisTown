import React from "react";
import "./Contemporary.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import NextSteps from "../Hooks/useInViewNextSteps";
import { Link } from "react-router-dom";
import BannerCarousel from "../components/BannerCarousel.tsx";



const Contemporary = () => {
  return (
    <div>
      <NavBar />
            {/* Banner Section */}
        <BannerCarousel />

      <div style={{ textAlign: "center" }}>
  <h1 className="dance-classes-title">CONTEMPORARY</h1>
  <div className="dance-classes-title-underline-contemporary"></div>
</div>

<div className="contemporary-image">
          <img src="https://i.imgur.com/LtOcket.png" alt="Dancers" />
        </div>
        <div className="text-container-acro">

        <p>
        Contemporary combines elements of ballet, modern, and lyrical. Students explore movement, space, rhythm and creativity with as a way of expressing the music and message they are dancing to.  Classes are offered for ages 6 years and up, based on skill level and experience, with beginner, intermediate and advanced contemporary classes available.         
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

export default Contemporary;
