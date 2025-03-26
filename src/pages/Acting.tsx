import React from "react";
import "./Acting.css";
import NavBar from "../components/NavBar.tsx";
import Footer from "../components/Footer.tsx";
import NextSteps from "../Hooks/useInViewNextSteps.tsx";
import { Link } from "react-router-dom";



const Acting = () => {
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
  <h1 className="dance-classes-title">ACTING</h1>
  <div className="dance-classes-title-underline-acting"></div>
</div>

<div className="acting-image">
          <img src="https://i.imgur.com/dY4Z2Xq.jpeg" alt="Dancers" />
        </div>
        <div className="text-container-acro">

        <p>
        We added acting classes to our programming line up (taught by Heather Wise) that we’re really excited about! You can enroll your child immediately or sign up for a free trial class first. Regular tuition fees apply.

Beginning Acting/Stage Presence (Ages 8-11); Monday 5:30pm-6:30pm.

This class introduces children to the fundamentals of acting through theater games, improv, short monologues and scenes, and much more theater fun. It is designed to build self-confidence and stimulate imagination.

Beginning/Intermediate Acting (Ages 12-17); Monday 6:30pm-7:30pm. 

Aspiring young actors will find a fun and exciting challenge in this Beginning/Intermediate Acting class! Students will learn the basics of how to feel comfortable on stage.  From fun improv and theater games to short monologue and scene work, this class will focus on the fundamentals of performing and how to let your light shine with confidence on stage!        
          </p>
          </div>

<Link to="/classes/featured" className="all-dances-button-link">
    <button className="all-dances-button">ALL FEATURED</button>
  </Link>

<NextSteps />

      <Footer />
    </div>
  );
};

export default Acting;
