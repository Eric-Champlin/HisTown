import React from "react";
import "./OurTeam.css";
import NavBar from "../components/NavBar.tsx";
import Footer from "../components/Footer.tsx";
import NextSteps from "../Hooks/useInViewNextSteps.tsx";
import { Link } from "react-router-dom";




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

    <section className="meet-our-team">
      <h1
        className={`meet-our-team-heading`}
      >
        OUR TEAM
      </h1>
      <div
        className={`team-items`}
      >
        <Link to="/about/our-team/owners" className="team-item-link">
          <div className="team-item">
            <div className="team-card">
              <img src="https://i.imgur.com/H0VTGeM.png" alt="Owners" />
            </div>
            <p className="team-label">OWNERS</p>
          </div>
        </Link>
        <Link to="/about/our-team/dance" className="team-item-link">
          <div className="team-item">
            <div className="team-card">
              <img src="https://i.imgur.com/5dfj0Ng.png" alt="Dance" />
            </div>
            <p className="team-label">DANCERS</p>
          </div>
        </Link>
        <Link to="/classes/music" className="team-item-link">
          <div className="team-item">
            <div className="team-card">
              <img src="https://i.imgur.com/zYc8QQs.png" alt="Music" />
            </div>
            <p className="team-label">MUSICIANS</p>
          </div>
        </Link>
      </div>
    </section>


<NextSteps />

      <Footer />
    </div>
  );
};

export default Acro;
