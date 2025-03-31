import React from "react";
import "./OurTeamLauren.css";
import NavBar from "../components/NavBar.tsx";
import Footer from "../components/Footer.tsx";
import NextSteps from "../Hooks/useInViewNextSteps.tsx";
import { Link } from "react-router-dom"; 



const OurTeamLauren = () => {
    return (
        <div>
          <NavBar />
          
          {/* Top Banner */}
          <div className="classes-banner">
            <img
              src="https://i.imgur.com/poLiUHv.png"
              alt="Classes Banner"
              className="classes-banner-image"
            />
          </div>
    
          {/* Main Content Section */}
          <section className="owners-section">
            {/* Heading */}
    
    
            <div style={{ textAlign: "center" }}>
      <h1 className="dance-classes-title-owners">LAUREN</h1>
      <div className="dance-teachers-title-underline-lauren"></div>
    </div>
    
            {/* Owner Image */}
            <div className="owners-image-container">
              <img
                src="https://i.imgur.com/Dyg1O6N.png"
                alt="Ken & Teresa Farley"
                className="owners-image"
              />
            </div>
    
            {/* Paragraphs */}
            <div className="owners-text">
              <p>
              Lauren grew up in St. Louis, MO and started dancing at 3 years old. She quickly began dancing competitively, both at the studio level (local and national competitions) and on her high school dance team (UDA finals). She was trained in jazz, contemporary, musical theatre, ballet, lyrical, tap, and hip hop.  Lauren also taught classes at her studio throughout high school as an assistant. She went on to attend the University of Mississippi and was a part of the Ole Miss Student dance company, an entirely student run group that put together a fall and spring show each year. Through this company, she continued weekly dance rehearsals during all four years of college, both as a dancer and as a choreographer. She loved teaching community classes and choreographing/running rehearsals for her own pieces. 
              </p>    
              <p>
              Lauren was actually drawn to Histown specifically because it is a Christian, faith-based studio. She has been a believer most of her life and considers her relationship with Jesus the most important thing to her. To be able to combine the love of dance, which helped grow her confidence and provide transformation relationships, along  with the love of Christ, is a unique opportunity and she feels extremely blessed to be able to encourage younger dancers to grow in both areas.              </p>
              
            </div>
    
    <br></br>
    <Link to="/about/our-team/dance" className="all-dances-button-link">
              <button className="all-dances-button">ALL DANCERS</button>
            </Link>
    
          </section>
    
    
    
      
    
          {/* Next Steps (if you want the grey skew after owners) */}
          <NextSteps />
    
          <Footer />
        </div>
      );
    };

export default OurTeamLauren;