import React from "react";
import "./OurTeamMusic.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import NextSteps from "../Hooks/useInViewNextSteps";
import BannerCarousel from "../components/BannerCarousel.tsx";


const OurTeamMusic = () => {
  return (
    <div>
      <NavBar />
            {/* Banner Section */}
        <BannerCarousel />

      <NextSteps />

      <Footer />
    </div>
  );
};

export default OurTeamMusic;
