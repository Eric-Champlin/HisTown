import React from "react";
import "./OurStory.css";
import NavBar from "../components/NavBar.tsx";
import Footer from "../components/Footer.tsx";
import NextSteps from "../Hooks/useInViewNextSteps.tsx";



const Acro = () => {
  return (
    <div>
      <NavBar />
      
      {/* Top Banner */}
      <div className="classes-banner">
        <img
          src="https://i.imgur.com/poLiUHv.png"
          alt="Classes Banner"
          className="classes-banner-image"
        />
      </div>

      {/* Main Content Section */}
      <section className="owners-section">
        {/* Heading */}


        <div style={{ textAlign: "center" }}>
  <h1 className="dance-classes-title-owners">OUR STORY</h1>
  <div className="dance-teachers-title-underline-kaitlin"></div>
</div>

        {/* Owner Image */}
<div className="owners-image-container">
  <img
    src="https://i.imgur.com/F5DIRFu.jpeg"
    alt="Ken & Teresa Farley"
    className="owners-image2"
  />
</div>


        {/* Paragraphs */}
        <div className="owners-text">
          <p>
          Histown was birthed over twenty years ago when we saw an opportunity to provide training in several genres of dance in a Christian setting, where dancers can use their God-given gifts and talents for ministry, outreach and entertainment.  With an emphasis on strong technique and professional training, it is our goal to provide a positive, fun and encouraging atmosphere where every dancer feels the love of Christ.  We also wanted to help dancers see there is more to dance than the applause of man and that because God deserves our very best they should strive for excellence.  We encourage each dancer to be the best they can be, without feeling the need or pressure to compete with each other, and view dance as a team activity where it's important to support and cheer on their fellow dancers along the way.  It is an honor for us to work with such a wonderful group of teachers and students who share our passion for the art of dance and more!          </p>

  

        </div>



      </section>



  

      {/* Next Steps (if you want the grey skew after owners) */}
      <NextSteps />

      <Footer />
    </div>
  );
};

export default Acro;
