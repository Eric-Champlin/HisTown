import React from 'react'; 
import './CreativeMovement.css'; 
import NavBar from '../components/NavBar'; 
import Footer from '../components/Footer'; 
import NextSteps from "../Hooks/useInViewNextSteps";
import { Link } from "react-router-dom";
import BannerCarousel from "../components/BannerCarousel.tsx";



const CreativeMovement = () => {
  return (
    <div>
      <NavBar />
            {/* Banner Section */}
        <BannerCarousel />

      <div style={{ textAlign: "center" }}>
  <h1 className="dance-classes-title">CREATIVE MOVEMENT</h1>
  <div className="dance-classes-title-underline-creative-movement"></div>
</div>

<div className="creative-image2">
          <img src="https://i.imgur.com/q06cfO3.png" alt="Dancers" />
        </div>
        <div className="text-container-acro">

        <p>
        These classes provide a fun, creative and game filled way to get children to understand how to control their movements and learn the introduction to terminology, positions, following ability, movement and choreography. Classes are offered for ages 2-3 and 3-5. All taught in a positive, encouraging environment.        </p>
        </div>

<Link to="/classes/dance" className="all-dances-button-link">
    <button className="all-dances-button">ALL DANCES</button>
  </Link>


<NextSteps />

      <Footer />
    </div>
  );
};

export default CreativeMovement;

