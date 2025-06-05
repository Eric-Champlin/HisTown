import React from "react";
import { Link } from "react-router-dom";
import "./Dance.css";
// @ts-ignore
import NavBar from "../components/NavBar.tsx";
// @ts-ignore
import Footer from "../components/Footer.tsx";
// @ts-ignore
import NextSteps from "../Hooks/useInViewNextSteps.tsx";


const Dance = () => {
  const danceItems = [
    { label: "ACRO", link: "/classes/acro", image: "https://i.imgur.com/MLK8okT.jpeg" },
    { label: "BALLET", link: "/classes/ballet", image: "https://i.imgur.com/1EKaR8k.jpeg" },
    { label: "BARRE", link: "/classes/barre-fitness", image: "https://i.imgur.com/RwemFsa.jpeg" },
    { label: "CONTEMPORARY", link: "/classes/contemporary", image: "https://i.imgur.com/IgaMtWa.jpeg" },
    { label: "CREATIVE MOVEMENT", link: "/classes/creative-movement", image: "https://i.imgur.com/KrGOz0c.jpeg" },
    { label: "FOUNDATIONS", link: "/classes/foundations", image: "https://i.imgur.com/DfU9JM8.jpeg" },
    { label: "HIP-HOP", link: "/classes/hip-hop", image: "https://i.imgur.com/pq89JhI.jpeg" },
    { label: "JAZZ", link: "/classes/jazz", image: "https://i.imgur.com/zw5ULWF.jpeg" },
    { label: "MODERN", link: "/classes/modern", image: "https://i.imgur.com/Hg48SNB.jpeg" },
    { label: "MOMMY & ME", link: "/classes/mommy-and-me", image: "https://i.imgur.com/Sw9TAQe.jpeg" },
    { label: "MUSICAL THEATER", link: "/classes/musical-theater", image: "https://i.imgur.com/ws8J2Ph.jpeg" },
    { label: "TAP", link: "/classes/tap", image: "https://i.imgur.com/Dx5CC5S.jpeg" }
  ];

  return (
    <div className="dance-classes-page">
      <NavBar />

      {/* Banner Section */}
      <div className="dance-classes-banner">
        <img
          src="https://i.imgur.com/poLiUHv.png"
          alt="Dance Classes Banner"
          className="dance-classes-banner-image"
        />
      </div>

      {/* Title & Underline */}
      <h1 className="dance-classes-title">DANCE</h1>
      <div className="dance-classes-title-underline"></div>

      {/* 4×3 Grid of Cards */}
      <div className="dance-classes-grid">
        {danceItems.map((dance, index) => (
          <div key={index} className="dance-classes-item">
            <Link to={dance.link} className="dance-classes-card-link">
              <div className="dance-classes-card">
                  <img
                      src={dance.image || `https://via.placeholder.com/400x250.png?text=${encodeURIComponent(dance.label)}`}
                      alt={`${dance.label} Dance Class`} // Changed from "${dance.label} Placeholder"
                  />
              </div>
              <p className="dance-classes-label">{dance.label}</p>
            </Link>
          </div>
        ))}
      </div>

      <NextSteps />

      <Footer />
    </div>
  );
};

export default Dance;
