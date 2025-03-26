import React from "react";
import "./OurTeamOwners.css";
import NavBar from "../components/NavBar.tsx";
import Footer from "../components/Footer.tsx";
import NextSteps from "../Hooks/useInViewNextSteps.tsx";

const OurTeamOwners = () => {
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
  <h1 className="dance-classes-title">Ken &amp; Teresa Farley</h1>
  <div className="dance-classes-title-underline-owners"></div>
</div>

        {/* Owner Image */}
        <div className="owners-image-container">
          <img
            src="https://i.imgur.com/H0VTGeM.png"
            alt="Ken & Teresa Farley"
            className="owners-image"
          />
        </div>

        {/* Paragraphs */}
        <div className="owners-text">
          <p>
            Ken and Teresa both share a love for the arts. Helping start Histown Dance 
            was something they felt strongly about because they have both seen firsthand 
            how dance can be a wonderful way of communicating God’s love, healing, and grace.
          </p>

          <p>
            Ken’s background is in national radio programming and promotions, 
            while Teresa’s experience includes directing large-scale productions 
            and mentoring dancers of all ages. They’ve seen how using God-given gifts 
            for ministry can transform not only the performers but also the audiences 
            who witness it. 
          </p>

          <p>
            Their family has been deeply involved in the arts, with three children who 
            grew up dancing, performing, and assisting in various studio productions. 
            Both Ken and Teresa feel called to foster an atmosphere that encourages 
            dancers to develop excellence, confidence, and faith. 
          </p>

          <p>
            Ken and Teresa have directed multiple live shows, organized outreach 
            events, and helped cultivate a welcoming environment for students of 
            all skill levels. Their goal is to see each dancer blossom in technique 
            and character, using their gifts to reflect God’s love. 
          </p>

          <p>
            They praise God for every blessing and are grateful for the opportunity 
            to serve dancers, families, and the greater community through Histown.
          </p>
        </div>
      </section>

      {/* Next Steps (if you want the grey skew after owners) */}
      <NextSteps />

      <Footer />
    </div>
  );
};

export default OurTeamOwners;
