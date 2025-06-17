import React from "react";
import "./Barre.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import NextSteps from "../Hooks/useInViewNextSteps";
import { Link } from "react-router-dom";



const Barre = () => {
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
  <h1 className="dance-classes-title">BARRE</h1>
  <div className="dance-classes-title-underline-barre"></div>
</div>

<div className="barre-image">
          <img src="https://i.imgur.com/cgWfUu3.png" alt="Dancers" />
        </div>
        <div className="text-container-acro">

        <p>
        Led by certified instructor, Mattie Tichenor, whether you’re a seasoned Barre enthusiast or looking to try something new, this method has something to offer to women of all fitness levels in an empowering and God honoring environment! Every Monday from 11:10am to 12pm, it’s a faith-based workout that’s both high energy and full of peace and tones, lifts, strengthens, stretches, and so much more! Open to women age 16 and up.. all ability levels welcome. There is a place for you! First class is only $10 so grab a friend and come sweat with us!  (See list of benefits below) 

Class size is limited so please sign up as soon as possible.         
        </p>
          </div>




  <Link to="/classes/dance" className="all-dances-button-link">
    <button className="all-dances-button">ALL DANCES</button>
  </Link>

<NextSteps />



      <Footer />
    </div>
  );
}

export default Barre;
