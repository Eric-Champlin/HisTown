import React from "react";
import "./OurTeamMattie.css";
import NavBar from "../components/NavBar.tsx";
import Footer from "../components/Footer.tsx";
import NextSteps from "../Hooks/useInViewNextSteps.tsx";
import { Link } from "react-router-dom"; 



const OurTeamMattie = () => {
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
      <h1 className="dance-classes-title-owners">MATTIE</h1>
      <div className="dance-teachers-title-underline-mattie"></div>
    </div>
    
            {/* Owner Image */}
            <div className="owners-image-container">
              <img
                src="https://i.imgur.com/Gr1a0nY.png"
                alt="Ken & Teresa Farley"
                className="owners-image"
              />
            </div>
    
            {/* Paragraphs */}
            <div className="owners-text">
              <p>
              Mattie has loved performing for as long as she can remember, and when she started dancing at just four years old she never looked back. At the age of six, she started training at Histown and remained at HTD until graduation from high school. She was able to learn from many incredible teachers during her 12 years at the studio both in technique and in faith which is why she feels so fortunate to have grown up at Histown. During those years, Mattie attended summer intensives at Cincinatti Ballet and Company E in Washington DC, and the EXCEL in Motion convention featuring faculty from So You Think You Can Dance where in her second year attending she made the Honor Roll. During her time at Histown, Mattie had the honor of dancing at the KLOVE Fan Awards on the Grand Ole Opry stage twice, performing with artists Mercy Me and Mandisa. She also danced with 1 Girl Nation on a nationally televised performance of the GMA Dove Awards.               </p>
    
              <p>
              After graduating in 2018, Mattie started her collegiate career at Lipscomb University where she both pursued a dance minor and participated in the program’s company, Foundation Dance Theatre. During this time, she also had the honor to dance in music videos for Josie Dunn and Ele Ivory. She pivoted the next year when she made the Vanderbilt University Dance Team. She was able to continue her education in business management at Lipscomb while training at Vanderbilt in Hip Hop, Jazz, and Pom and performing regularly at football and basketball games in front of thousands of fans. Her last performance with the team was at the SEC tournament at Bridgestone Arena in 2020. In the summer of 2020 Mattie returned to her high school “alma mater” to create a dance program for the purpose of discipleship and teaching about dance that honors God. Above all, Mattie is passionate about using dance as worship and ministry.               </p>
    
              <p>
              After graduating from Lipscomb in May of 2022, Mattie was thrilled at the opportunity to return to Histown. Histown feels like home to her, and she loves getting to teach in an environment that is all about Jesus. Her desire is to be a vessel for God to show both His love and truth to students. She loves kids and finds so much joy getting to pour into them! She also believes dance is a powerful avenue to share God’s truth with the world. She is excited to see how He continues to lead her in the mission to point to Him through every style of dance.              </p>

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

export default OurTeamMattie;