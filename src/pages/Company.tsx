import React from "react";
import "./Company.css";
import NavBar from "../components/NavBar.tsx";
import Footer from "../components/Footer.tsx";
import NextSteps from "../Hooks/useInViewNextSteps.tsx";
import { Link } from "react-router-dom";



const Company = () => {
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
  <h1 className="dance-classes-title">COMPANY</h1>
  <div className="dance-classes-title-underline-company"></div>
</div>

<div className="company-image">
          <img src="https://i.imgur.com/hSheeqe.jpeg" alt="Dancers" />
        </div>
        <div className="text-container-acro">

        <p>
        Histown has five companies this year (Senior, 1st, 2nd, 3rd & 4th) that meet on a weekly basis to train, dance and worship together.  It’s an opportunity for them to grow as dancers and connect through their faith and with each other on a deeper level.  Company members are expected to be positive role models and lead by example in how they live their lives and the way they treat others, both inside and outside of the studio.  Whether they’re interested in more ministry opportunities, professional training or both, company dancers are highly dedicated and serious about pursuing their love and passion for dance.  Company members also get the opportunity to perform at events outside of our recitals and choreograph and perform a solo/senior piece their graduating year of high school in our May recital.          </p>
          </div>

<Link to="/classes/featured" className="all-dances-button-link">
<button className="all-dances-button">ALL FEATURED</button>
</Link>


<NextSteps />

      <Footer />
    </div>
  );
};

export default Company;
