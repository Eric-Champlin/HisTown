import React from "react";
import "./Birthday.css";
import NavBar from "../components/NavBar.tsx";
import Footer from "../components/Footer.tsx";

const Birthday = () => {
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
  <h1 className="dance-classes-title">Birthday Parties</h1>
  <div className="underline-birthday"></div>
</div>
      <Footer />
    </div>
  );
};

export default Birthday;
