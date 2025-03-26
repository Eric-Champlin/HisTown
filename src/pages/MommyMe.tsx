import React from "react";
import "./MommyMe.css";
import NavBar from "../components/NavBar.tsx";
import Footer from "../components/Footer.tsx";
import NextSteps from "../Hooks/useInViewNextSteps.tsx";
import { Link } from "react-router-dom";



const MommyMe = () => {
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
  <h1 className="dance-classes-title">MOMMY & ME</h1>
  <div className="dance-classes-title-underline-mommyme"></div>
</div>

<div className="mommy-image">
          <img src="https://i.imgur.com/Sw9TAQe.jpeg" alt="Dancers" />
        </div>
        <div className="text-container-acro">

        <p>
        Monday Mornings from 10:15am -11am, 16 months - 3 years.
        A Creative Movement dance class that incorporates sign language, learning colors and shapes, social interaction with other children, following instructions and more. It's a fun and engaging developmental class involving parent and child and is a great class to help your child transition into a dance class on their own.   COST: $35 - $90 a month depending on the number of dance classes your family is signed up for.         
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

export default MommyMe;
