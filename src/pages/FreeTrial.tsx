import React from "react";
import "./FreeTrial.css";
import NavBar from "../components/NavBar.tsx";
import Footer from "../components/Footer.tsx";

const FreeTrial = () => {
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
  <h1 className="dance-classes-title">FREE TRIAL</h1>
  <div className="underline-trial"></div>
</div>
      <Footer />
    </div>
  );
};

export default FreeTrial;
