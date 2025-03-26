import React from "react";
import "./Vocals.css";
import NavBar from "../components/NavBar.tsx";
import Footer from "../components/Footer.tsx";
import NextSteps from "../Hooks/useInViewNextSteps.tsx";
import { Link } from "react-router-dom";



const Vocals = () => {
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
  <h1 className="dance-classes-title">VOCAL</h1>
  <div className="dance-classes-title-underline-vocal"></div>
</div>

<div className="vocal-image">
          <img src="https://i.imgur.com/NfRzujt.png" alt="Dancers" />
        </div>
        <div className="text-container-acro">

        <p>
        We are excited to be able to expand our performing arts program to include voice lessons with Ms. Ele! She is an amazing teacher and we have a limited number of spots to work with her.  You have the option to sign up for private lessons by emailing or calling us directly to book your weekly spot and we are also offering the option to take a free trial voice lesson first.  This is for beginner, intermediate and advanced students, ages 7 and up. Yes! Even adults are signing up for private lessons.   After taking the trial class, families will have the option to schedule on-going weekly lessons throughout the year. If your student tries the lesson and decides not to enroll for any more lessons, the trial lesson is free.  If you sign them up for future lessons, you do pay for the first one.  This is the same way we handle our free trials dance classes.  Lessons are $165 a month for four, weekly 30-minute lessons (students ages 7-11), and $320 a month for four, weekly 50-minute lessons (students ages 12-18) plus a $50 annual registration fee. These fees are very competitive/comparable with other music programs taught in the area. To sign up for a free trial lesson contact the office at 615-840-8849 or email us at Balletdancer1000@aol.com         
                </p>
          </div>


<Link to="/classes/music" className="all-dances-button-link">
    <button className="all-dances-button">ALL MUSIC</button>
  </Link>

<NextSteps />

      <Footer />
    </div>
  );
};

export default Vocals;
