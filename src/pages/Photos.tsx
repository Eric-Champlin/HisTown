import React from "react";
import "./Photos.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import NextSteps from "../Hooks/useInViewNextSteps";

const Acro = () => {
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
        <h1 className="dance-classes-title">K-LOVE FAN AWARDS</h1>
        <div className="underline-videos"></div>
        {/* Video Embed */}
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Gu_9v9EdvzM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

     
        <div className="text-container-photos">

        <p>
        Our dancers took center stage and delivered a show-stopping performance for MercyMe at the K-LOVE Fan Awards! It was an electrifying night where passion, creativity, and pure movement lit up the stage, turning MercyMe's performance into an unforgettable celebration of music and dance.        
          </p>
          </div>

      <NextSteps />
      <Footer />
    </div>
  );
};

export default Acro;
