import React from "react";
import "./OurTeamDelia.css";
import NavBar from "../components/NavBar.tsx";
import Footer from "../components/Footer.tsx";
import NextSteps from "../Hooks/useInViewNextSteps.tsx";
import { Link } from "react-router-dom"; 



const OurTeamDelia = () => {
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
  <h1 className="dance-classes-title">DELIA</h1>
  <div className="dance-teachers-title-underline-delia"></div>
  <h1 className="coming-soon">Coming Soon!</h1>

</div>

    <Link to="/about/our-team/dance" className="all-dances-button-link">
              <button className="all-dances-button">ALL DANCERS</button>
            </Link>
<NextSteps />
      <Footer />
    </div>
  );
};

export default OurTeamDelia;