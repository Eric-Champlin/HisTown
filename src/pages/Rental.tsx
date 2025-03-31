import React from "react";
import "./Rental.css";
import NavBar from "../components/NavBar.tsx";
import Footer from "../components/Footer.tsx";
import NextSteps from "../Hooks/useInViewNextSteps.tsx";


const Rental = () => {
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
        <h1 className="dance-classes-title">STUDIO RENTAL</h1>
        <div className="underline-birthday"></div>
      </div>

      <div className="acro4-image">
        <img src="https://i.imgur.com/2Zbu5kk.jpeg" alt="Dancers" />
      </div>

      {/* Text from the screenshot */}
      <div className="text-container-acro2">
        <p>
        <strong><center>We might have the space you're looking for!</center></strong>

        </p>
        <p>
        With eight different studios to choose from (ranging in size from 425 sq. ft. to 3400 sq. ft.) whether you need to rent a space for a regular on-going activity, private dance lessons, performance rehearsal, or special one-off event like a birthday party, business seminar, or even a wedding, we might have the space for you.   Contact us today to discuss what you're needing and let's see if our spot is what you're looking for.
        </p>
        
      </div>

      <div className="acro5-image">
        <img src="https://i.imgur.com/cH1qjnw.jpeg" alt="Dancers" />
      </div>

      <NextSteps />
      <Footer />
    </div>
  );
};

export default Rental;
