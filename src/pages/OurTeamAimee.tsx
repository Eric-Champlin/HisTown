import React from "react";
import "./OurTeamAimee.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import NextSteps from "../Hooks/useInViewNextSteps";
import { Link } from "react-router-dom"; 



const OurTeamAimee = () => {
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
      <h1 className="dance-classes-title-owners">AIMEE</h1>
      <div className="dance-teachers-title-underline-aimee"></div>
    </div>
    
            {/* Owner Image */}
            <div className="owners-image-container">
              <img
                src="https://i.imgur.com/5Q2EHcH.png"
                alt="Ken & Teresa Farley"
                className="owners-image"
              />
            </div>
    
            {/* Paragraphs */}
            <div className="owners-text">
              <p>
              Aimee Patrick began dancing at age seven. At age 9 she won the Dance Masters Grand Championshi in Upstate NY. At age 12 Aimee was awarded a position with the Tucson Metropolitan Ballet Compan and went on to become a contract soloist. She also made her first tv appearance in Little House on the Prairi. As a teen, Aimee won Scholarships to both the Houston Balle and the San Francisco Ballet summer intensive programs and spent several summers studying at these prestigious schools. Beginning at age 13, she performed with the Southern Arizona Light Oper company in such roles as Susan the Silent in Finian’s Rainbo, Eliza in The King and , as well as in other chorus roles. At age 18, Aimee relocated to Los Angeles where she studied jazz and hip hop and performed in various productions. She was one of 5 finalists in contention for a lead role in the TV series Fam. At age 22 Ms. Patrick went to work for Walt Disney World s a World Dance maintaining 27 roles in 9 shows throughout Disney property. She performed with many celebrities including: Tommy Tune, Donald O’Connor (Singing in the Rain), Carol Lawrence, BB King, Sesame Street’s Bob McGrat and Lee Greenwoood. imee appeared in Disney TV shows, commercials, photo shoots and live shows. Aimee also had the opportunity to choreograph for Walt Disney’s renowned World Dancers’ summer showcase at Epcot Center.              </p>
    
              <p>
              Aimee relocated to Nashville, TN with her husband Steve, a studio session musician, where she has performed and choreographed locally in convention and live shows, music videos, national tours and tv specials. Aimee also worked as assistant to the VP of A&R for Diadem records: Bob Carlisle’s Butterfly Kisse album and music video, and Grammy winner Yolanda Adams and many more. Aimee has acted as a consultant, guest artist and choreographer for many churches including The People’s Church, Fayetteville Baptist Church, Christ Presbyterian Church, Two Rivers Baptist Church, Born again Church, First Church of the Nazarene nd Gateway Community Churc in addition to choreographing Two Rivers Church’s annual Passion Pla Easter production. The greatest highlights of Aimee’s career were performing for former President George Bus, placing 4th in the World Dance Championship in London England, Performing on tour with Christian Artist Carma and the fun, thrill and excitement of performing as a Tennessee Titans Cheerleader aka Oiler Girls. Aimee currently is the head coach for the Grassland Middle School Dance team and continues to dance, act, teach, and choreograph for local stage, film, videos and commercials.    
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

export default OurTeamAimee;