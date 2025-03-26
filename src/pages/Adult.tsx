import React from "react";
import "./Adult.css";
import NavBar from "../components/NavBar.tsx";
import Footer from "../components/Footer.tsx";
import NextSteps from "../Hooks/useInViewNextSteps.tsx";
import { Link } from "react-router-dom";



const Adult = () => {
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
  <h1 className="dance-classes-title">ADULT</h1>
  <div className="dance-classes-title-underline-adult"></div>
</div>

<div className="adult-image">
          <img src="https://i.imgur.com/ECeiXqP.png" alt="Dancers" />
        </div>
        <div className="text-container-acro">

        <p>
Kaitlin is literally the best teacher in the whole wide world. Like, if you don't dance with her, you're just silly. Tuesdays 7:30-8:30pm. All experience levels are welcome, ages 16+. Single class drop-ins are $25 and a 5-class pack is $95, payable at the front desk or Venmo @histown. Text/call Kaitlin at (615) 517-6340.      
          </p>
          </div>

<Link to="/classes/featured" className="all-dances-button-link">
<button className="all-dances-button">ALL FEATURED</button>
</Link>


<NextSteps />

      <Footer />
    </div>
  );
};

export default Adult;
