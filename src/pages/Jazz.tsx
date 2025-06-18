import React from "react";
import "./Jazz.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import NextSteps from "../Hooks/useInViewNextSteps";
import { Link } from "react-router-dom";
import BannerCarousel from "../components/BannerCarousel.tsx";



const Jazz = () => {
  return (
    <div>
      <NavBar />
            {/* Banner Section */}
        <BannerCarousel />

      <div style={{ textAlign: "center" }}>
  <h1 className="dance-classes-title">JAZZ</h1>
  <div className="dance-classes-title-underline-jazz"></div>
</div>

<div className="jazz-image">
          <img src="https://i.imgur.com/KvDhiBf.png" alt="Dancers" />
        </div>
        <div className="text-container-acro">

        <p>
        Jazz combines many styles and techniques from ethnic and contemporary dance, musical theater, swing, funk and ballet. Using a variety of music, students train in flexibility, rhythm, and control incorporating the basic principles of this dance style. Classes are offered for ages 3 years and up, based on skill level and experience, with beginner, intermediate and advanced jazz classes available.        
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

export default Jazz;
