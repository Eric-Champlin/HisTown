import React from "react";
import "./Adult.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import NextSteps from "../Hooks/useInViewNextSteps";
import { Link } from "react-router-dom";
import BannerCarousel from "../components/BannerCarousel.tsx";



const Adult = () => {
  return (
    <div>
      <NavBar />
            {/* Banner Section */}
        <BannerCarousel />

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
