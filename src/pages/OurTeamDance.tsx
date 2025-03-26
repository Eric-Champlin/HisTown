import React from "react";
import { Link } from "react-router-dom";
import "./OurTeamDance.css";       // <-- Import the new CSS file
import NavBar from "../components/NavBar.tsx";
import Footer from "../components/Footer.tsx";
import NextSteps from "../Hooks/useInViewNextSteps.tsx";

const OurTeamDance = () => {
  // Example array of 8 teachers (adjust images/links as needed):
  const danceTeachers = [
    { label: "KAITLIN", link: "/about/our-team/dance/teacherA", image: "https://i.imgur.com/6TdHCr8.png" },
    { label: "MATTIE", link: "/about/our-team/dance/teacherB", image: "https://i.imgur.com/Gr1a0nY.png" },
    { label: "GRACIE", link: "/about/our-team/dance/teacherC", image: "https://i.imgur.com/jgZT5fx.png" },
    { label: "AIMEE", link: "/about/our-team/dance/teacherD", image: "https://i.imgur.com/5Q2EHcH.png" },
    { label: "LAUREN", link: "/about/our-team/dance/teacherE", image: "https://i.imgur.com/Dyg1O6N.png" },
    { label: "ALLISON", link: "/about/our-team/dance/teacherF", image: "https://i.imgur.com/4pPCfQG.png" },
    { label: "HEATHER", link: "/about/our-team/dance/teacherG", image: "https://i.imgur.com/lYRyk4A.png" },
    { label: "ANNA", link: "/about/our-team/dance/teacherH", image: "https://i.imgur.com/hDOxG92.png" },
  ];

  return (
    <div className="dance-teachers-page">
      <NavBar />

      {/* Banner Section */}
      <div className="dance-teachers-banner">
        <img
          src="https://i.imgur.com/poLiUHv.png"
          alt="Dance Teachers Banner"
          className="dance-teachers-banner-image"
        />
      </div>

      {/* Page Title & Underline */}
      <h1 className="dance-teachers-title">DANCERS</h1>
      <div className="dance-teachers-title-underline"></div>

      {/* 4×2 Grid of Cards */}
      <div className="dance-teachers-grid">
        {danceTeachers.map((teacher, index) => (
          <div key={index} className="dance-teachers-item">
            <Link to={teacher.link} className="dance-teachers-card-link">
              <div className="dance-teachers-card">
                <img
                  src={teacher.image}
                  alt={teacher.label}
                />
              </div>
              <p className="dance-teachers-label">{teacher.label}</p>
            </Link>
          </div>
        ))}
      </div>

      <NextSteps />
      <Footer />
    </div>
  );
};

export default OurTeamDance;
