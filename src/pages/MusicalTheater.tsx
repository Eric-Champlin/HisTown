import React from "react";
import "./MusicalTheater.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import NextSteps from "../Hooks/useInViewNextSteps";
import { Link } from "react-router-dom";
import BannerCarousel from "../components/BannerCarousel.tsx";



const MusicalTheater = () => {
  return (
    <div>
      <NavBar />
            {/* Banner Section */}
        <BannerCarousel />

      <div style={{ textAlign: "center" }}>
  <h1 className="dance-classes-title">MUSICAL THEATER</h1>
  <div className="dance-classes-title-underline-musical-theater"></div>
</div>

<div className="theater-image">
          <img src="https://i.imgur.com/1d5NOe2.png" alt="Dancers" />
        </div>
        <div className="text-container-acro">

        <p>
        Musical Theater places an emphasis on theater dance, jazz, Broadway style productions, story through movement and improvisation.  Dancers also learn skills and concepts that will help boost their confidence and elevate their stage presence, making them better performers and dancers.  Classes are offered for ages 6 years and up, based on skill level and experience, with beginner, intermediate and advanced musical theater classes available.
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

export default MusicalTheater;
