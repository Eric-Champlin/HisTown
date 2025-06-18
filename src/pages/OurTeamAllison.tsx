import React from "react";
import "./OurTeamAllison.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import NextSteps from "../Hooks/useInViewNextSteps";
import { Link } from "react-router-dom";
import BannerCarousel from "../components/BannerCarousel.tsx";



const OurTeamAllison = () => {
    return (
        <div>
          <NavBar />
          
          {/* Top Banner */}
            <BannerCarousel />

    
          {/* Main Content Section */}
          <section className="owners-section">
            {/* Heading */}
    
    
            <div style={{ textAlign: "center" }}>
      <h1 className="dance-classes-title-owners">ALLISON</h1>
      <div className="dance-teachers-title-underline-allison"></div>
    </div>
    
            {/* Owner Image */}
            <div className="owners-image-container">
              <img
                src="https://i.imgur.com/4pPCfQG.png"
                alt="Ken & Teresa Farley"
                className="owners-image"
              />
            </div>
    
            {/* Paragraphs */}
            <div className="owners-text">
              <p>
              Allison was born and raised in Nashville, TN and began her dance training at 3 years old with the Metro Parks Dance Division. While she has trained most extensively in ballet, pointe, and contemporary, she has also received training in styles including modern, jazz, tap, hip hop, and african dance. Through highschool Allison trained and performed with the Centennial Youth Ballet (CYB) under the leadership of Jennifer McNamara and Matthew Christensen. During her time there, she performed various soloist and principal roles, including Lead Marzipan, Spanish Soloist, Snow Queen, and The Sugar Plum Fairy in The Nutcracker, Shades Soloist in La Bayadere, and She in The Heart is an Organ of Fire. In addition to the classical works she performed, she had the opportunity to be cast in various original neoclassical and contemporary works. In addition to the wonderful training she received through CYB, she was privileged to train under many additional guest instructors through intensives and master classes, including training closely with members of the contemporary collective New Dialect. Alongside her formal training, Allison was surrounded by mentors that helped to foster the idea of movement as worship.    
              </p>
              <p>
              After graduating from High school, Allison continued pursuing her dancing career in both performing and teaching. One of her favorite seasons was when she toured various regions of South Africa and the U.S. with Khanyisa - a multi-cultural dance and worship ministry team based in South Africa. Through her work there she was given the opportunity to combine her passions for dancing, working with kids, and sharing the love and hope found in Jesus.     
              </p>
              
              <p>
              Allison has always had a deep love and passion for dance as a whole, but more importantly the impact dance and movement has on a spiritual level when surrendered to Jesus. Additionally, she has seen firsthand how dance is a universal language that the Lord can and does use to serve as a bridge between cultural and language barriers. Allison loves getting to teach and mentor students, hoping to inspire them to grow not only in their technique and artistry as a dancer, but also in their relationship with Jesus. It causes her great joy to see the beauty of when those elements intertwine. 
              </p>
            </div>
    
    <br></br>
    <Link to="/about/our-team/dance" className="all-dances-button-link">
              <button className="all-dances-button">ALL DANCERS</button>
            </Link>
    
          </section>
    
    
    
      
    
          {/* Next Steps (if you want the grey skew after owners) */}
          <NextSteps />
    
          <Footer />
        </div>
      );
    };

export default OurTeamAllison;