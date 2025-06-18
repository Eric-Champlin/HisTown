import React from "react";
import "./OurTeam.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import NextSteps from "../Hooks/useInViewNextSteps";
import { Link } from "react-router-dom";
import BannerCarousel from "../components/BannerCarousel.tsx";




const Acro = () => {
  return (
    <div>
      <NavBar />
            {/* Banner Section */}
      <BannerCarousel />


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
