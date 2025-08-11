import React from "react";
import "./DressCode.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import BannerCarousel from "../components/BannerCarousel.tsx";
import NextSteps from "../Hooks/useInViewNextSteps.tsx";


const DressCode = () => {
  return (
    <div className="dresscode-page">
      <NavBar />

      {/* Banner Section */}
        <BannerCarousel />


      {/* Title & Underline */}
      <div className="dresscode-header">
        <h1 className="dance-classes-title">DRESS CODE</h1>
        <div className="dance-classes-title-underline-dresscode"></div>
      </div>


      <div className="schedule-image">
          <img src="https://i.imgur.com/orpqTUp.png" alt="Dancers" />
        </div>

      {/* Dress Code Content */}
      <div className="dresscode-content">
      <div className="dresscode-section">
          <h2>Acro</h2>
          <p>
            Dancers must wear leotards; Level 2A and up must wear black leotards. Dance shorts or leggings are optional; shirts are not allowed. Bare feet or foot undies may be worn. Hair must be securely pulled up away from the face; long hair must be all the way up in a ponytail.
          </p>
        </div>
        <div className="dresscode-section">
          <h2>Ballet / Creative Movement</h2>
          <p>
            Creative Movement through Level 1B dancers are to wear pink ballet tights (not footless) and leotards of any color. No leggings. Level 2A through 4B dancers are to wear pink ballet tights (not footless) and black leotards. Ballet skirt is optional and must be worn around the waist. Ballet shoes may be leather or canvas. Ballet shoes may be split sole or full sole (no ballet slippers). Hair must be securely up in a bun using bobby pins. If it comes down in class, it was not secured well enough.
          </p>
        </div>
        <div className="dresscode-section">
          <h2>Contemporary</h2>
          <p>
            Dancers may wear dance shorts or biker shorts, leggings or jazz pants. Leotards are required; Level 2A and up must wear black leotards. No shirts are allowed. Bare feet or foot undies may be worn. Hair must be securely pulled up away from the face.
          </p>
        </div>

        <div className="dresscode-section">
          <h2>Hip-Hop</h2>
          <p>
            Sweat pants are preferred, but dancers may wear dance shorts, biker shorts, or dance pants along with shirts or t-shirts—whatever lets you move freely. No inappropriate, vulgar or offensive wording or symbols allowed. Dancers must wear tennis shoes/sneakers to class. Keep it modest: no half-shirts or clothing that bares the midriff.
          </p>
        </div>
        <div className="dresscode-section">
          <h2>Jazz</h2>
          <p>
            Dancers may wear dance shorts, biker shorts, leggings or jazz pants. Must wear leotards. Level 2A and up must wear black leotards—no shirts are allowed. Jazz shoes are necessary for jazz class. Tan shoes are preferred for performances, though black may be worn during class. Hair must be securely pulled up away from the face; long hair needs to be all the way up in a ponytail.
          </p>
        </div>
        <div className="dresscode-section">
          <h2>Modern</h2>
          <p>
            Dancers may wear dance shorts, biker shorts, leggings or jazz pants. Leotards are required; Level 3A and up must wear black leotards. Bare feet are necessary for modern class. Hair must be securely pulled up away from the face—long hair must be all the way up.
          </p>
        </div>
        <div className="dresscode-section">
          <h2>Musical Theater</h2>
          <p>
            Dancers may wear dance shorts, biker shorts, leggings or jazz pants. Leotards are required; Level 2A and up must wear black leotards; shirts are not allowed. Jazz shoes are necessary for musical theater—tan shoes are preferred for performances, but black shoes may be worn in class. Hair must be securely pulled up away from the face; long hair must be all the way up in a ponytail.
          </p>
        </div>
        <div className="dresscode-section">
          <h2>Tap</h2>
          <p>
            Dancers may wear dance shorts, biker shorts, leggings or jazz pants. Leotards are required; Level 2A and up must wear black leotards—no shirts are allowed. Tap shoes are necessary; black shoes are preferred for performances. Hair must be securely pulled up away from the face; long hair must be all the way up in a ponytail.
          </p>
        </div>

      </div>


        <NextSteps />
      <Footer />
    </div>
  );
};

export default DressCode;
