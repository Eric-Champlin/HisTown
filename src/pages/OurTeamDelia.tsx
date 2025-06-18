import React from "react";
import "./OurTeamDelia.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import NextSteps from "../Hooks/useInViewNextSteps";
import { Link } from "react-router-dom";
import BannerCarousel from "../components/BannerCarousel.tsx";



const OurTeamDelia = () => {
  return (
    <div>
      <NavBar />
            {/* Banner Section */}
        <BannerCarousel />

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