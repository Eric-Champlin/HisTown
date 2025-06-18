import React from "react";
import "./OurTeamKaitlin.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import NextSteps from "../Hooks/useInViewNextSteps";
import { Link } from "react-router-dom";
import BannerCarousel from "../components/BannerCarousel.tsx";



const OurTeamKaitlin = () => {
    return (
        <div>
          <NavBar />
          
          {/* Top Banner */}
            <BannerCarousel />

    
          {/* Main Content Section */}
          <section className="owners-section">
            {/* Heading */}
    
    
            <div style={{ textAlign: "center" }}>
      <h1 className="dance-classes-title-owners">KAITLIN</h1>
      <div className="dance-teachers-title-underline-kaitlin"></div>
    </div>
    
            {/* Owner Image */}
            <div className="owners-image-container">
              <img
                src="https://i.imgur.com/6TdHCr8.png"
                alt="Ken & Teresa Farley"
                className="owners-image"
              />
            </div>
    
            {/* Paragraphs */}
            <div className="owners-text">
              <p>
              Kaitlin is a native of Nashville and spent her early training at Histown, where she began dancing at five years old. Kaitlin has been trained in ballet, modern, jazz, and contemporary, and she currently teaches modern, ballet, and contemporary at Histown. In 2013, Kaitlin performed the roles of Snow Queen and Sugar Plum in Children’s Ballet Theatre’s Nutcracker. That following year, Kaitlin attended the International Ballet Academy’s summer intensive in Cary, NC and took workshops with Ballet Magnificat! 
              </p>
    
              <p>
              After high school, Kaitlin accepted a dance scholarship to Belhaven University in Jackson, MS, where she had the privilege of studying under faculty members Laura Morton of Houston Ballet and Ravenna Tucker of Birmingham Royal Ballet, as well as perform choreography by Vincent Hardy and other artists. During her time at Belhaven, Kaitlin attended the adjudicated 2016 ACDA festival and also performed for two semesters with Belhaven’s traveling dance ministry ensemble. 
              </p>
    
              <p>
              In recent years, Kaitlin has performed with MercyMe at the KLove Awards and in Daniella Mason’s “Cruel Summer” music video. Although she loves the entertainment side of dance, Kaitlin is passionate about the critical role of movement in ministry. In the summer of 2017, Kaitlin traveled to Portugal with Operation Mobilization to perform on the streets, teach dance, and bring the love of Jesus to the Mediterranean. Kaitlin has performed for the inmates in the TN Women’s Maximum Security Prison, and in 2018, Kaitlin will have the opportunity with a local ESL organization to teach a movement class to Muslim refugees in the Nashville area. Using dance as a tool to share the love of Jesus with students from every walk of life brings Kaitlin so much joy.  
              </p>

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

export default OurTeamKaitlin;