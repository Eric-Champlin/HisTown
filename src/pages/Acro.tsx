import React from "react";
import "./Acro.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import NextSteps from "../Hooks/useInViewNextSteps";
import { Link } from "react-router-dom";
import BannerCarousel from "../components/BannerCarousel.tsx";




const Acro = () => {
  return (
    <div>
      <NavBar />
            {/* Banner Section */}
        <BannerCarousel />

      <div style={{ textAlign: "center" }}>
  <h1 className="dance-classes-title">ACRO</h1>
  <div className="dance-classes-title-underline-acro"></div>
</div>

<div className="acro2-image">
          <img src="https://i.imgur.com/BOM9Xhp.png" alt="Dancers" />
        </div>
        <div className="text-container-acro">

        <p>
        Acro is a style of dance that combines classical dance technique with precision acrobatic elements. It is defined by its athletic character, its unique choreography, which seamlessly blends dance and acrobatics, and its use of acrobatics in a dance context.  Classes are offered for ages 3 years and up, based on skill level and experience. 
          </p>

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

export default Acro;
