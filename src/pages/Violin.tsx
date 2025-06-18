import React from "react";
import "./Violin.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import NextSteps from "../Hooks/useInViewNextSteps";
import { Link } from "react-router-dom";
import BannerCarousel from "../components/BannerCarousel.tsx";



const Violin = () => {
  return (
    <div>
      <NavBar />
            {/* Banner Section */}
        <BannerCarousel />

      <div style={{ textAlign: "center" }}>
  <h1 className="dance-classes-title">VIOLIN</h1>
  <div className="dance-classes-title-underline-violin"></div>
</div>        

<div className="violin-image">
          <img src="https://i.imgur.com/P7RVvAP.png" alt="Dancers" />
        </div>
        <div className="text-container-acro">

        <p>
        We are excited to be able to expand our performing arts program to include violin lessons with Ms. Sophia! She is an amazing teacher and we have a limited number of spots to work with her.  You have the option to sign up for private lessons by emailing or calling us directly to book your weekly spot and we are also offering the option to take a 30-minute free trial violin lesson first.  This is for beginner, intermediate and advanced students, ages 6 and up. Yes! Even adults are signing up for private lessons.   After taking the trial class, families will have the option to schedule on-going weekly lessons throughout the yearl. If your student tries the lesson and decides not to enroll for any more lessons, the trial lesson is free.  If you sign them up for future lessons, you do pay for the first one.  This is the same way we handle our free trials dance classes.  Lessons are $160 a month for four, weekly 30-minute lessons, plus a $50 annual registration fee. These fees are very competitive/comparable with other music programs taught in the area. To sign up for a free trial lesson contact the office at 615-840-8849 or email us at Balletdancer1000@aol.com           </p>
          </div>

<Link to="/classes/music" className="all-dances-button-link">
    <button className="all-dances-button">ALL MUSIC</button>
  </Link>

<NextSteps />

      <Footer />
    </div>
  );
};

export default Violin;
