import React from "react";
import "./Foundations.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import NextSteps from "../Hooks/useInViewNextSteps";
import { Link } from "react-router-dom";
import BannerCarousel from "../components/BannerCarousel.tsx";



const Foundations = () => {
  return (
    <div>
      <NavBar />
            {/* Banner Section */}
        <BannerCarousel />

      <div style={{ textAlign: "center" }}>
  <h1 className="dance-classes-title">FOUNDATIONS</h1>
  <div className="dance-classes-title-underline-foundations"></div>
</div>

<div className="foundations-image2">
          <img src="https://i.imgur.com/ISGzGpy.jpeg" alt="Dancers" />
        </div>
        <div className="text-container-acro">

        <p>
        Foundations is a program (ages 9-12) for students seeking a more intense opportunity to dance while fully glorifying God. Foundations is a two-fold dance training and discipleship program. Members of Foundations will be introduced to dance as worship and ministry, and technically trained: striving for excellence that displays His glory! Classes are held 10am-12pm on Saturday. This is a performing company. During the fall and spring semesters, dancers will have opportunities to perform locally as well as attend and perform at other events like  the Dance Revolution Convention in North Carolina, Orlando and Dallas.  Cost is $100 a month.  Weekly class requirements for ages 8-12 includes one hour of ballet, one hour of jazz or contemporary along with at least one other elective class (i.e. jazz, ballet, contemporary, Acro, leaps & turns, hip- hop, musical theater, modern, tap, etc.)      
        </p>
        </div>

<Link to="/classes/dance" className="all-dances-button-link">
    <button className="all-dances-button">ALL DANCES</button>
  </Link>


<NextSteps />

      <Footer />
    </div>
  );
};

export default Foundations;
