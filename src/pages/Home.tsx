import React from "react";
import "./Home.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import DanceClasses from "../Hooks/useInViewDance";
import MusicClasses from "../Hooks/useInViewMusic";
import FeaturedClasses from "../Hooks/useInViewFeatured";
import Testimonials from "../Hooks/useInViewTestimonials";
import MeetOurTeam from "../Hooks/useInViewTeam";
import WhyUs from "../Hooks/useInViewWhyUs";
import NextSteps from "../Hooks/useInViewNextSteps";
import BannerCarousel from "../components/BannerCarousel";

const Home = () => {
  return (
    <div className="homepage">
      <NavBar />

      {/* =====================================
           Banner Carousel
      ===================================== */}

        <Carousel
        {...({
          showArrows: true,
          autoPlay: true,
          infiniteLoop: true,
          showThumbs: false,
          showStatus: false,
          className: "homepage-banner",
          interval: 3000,
        } as any)}
      >
          <div>
              <img
                  src="https://i.imgur.com/poLiUHv.png"
                  alt="Dance studio performance"
              />
          </div>
          <div>
              <img
                  src="https://i.imgur.com/poLiUHv.png"
                  alt="Dance recital showcase"
              />
          </div>
          <div>
              <img
                  src="https://i.imgur.com/poLiUHv.png"
                  alt="Student dance performance"
              />
          </div>
      </Carousel>

      {/* =====================================
           Our Mission Section
      ===================================== */}
      <section className="our-mission">
        <div className="text-container">
          <h1>OUR MISSION</h1>
          <p>
            Histown was founded over 20 years ago to provide dance training in a
            Christian setting, where dancers use their God‑given gifts for
            ministry, outreach, and entertainment. With a focus on strong
            technique and professional training, we create a positive and
            encouraging atmosphere filled with Christ’s love. Our goal is to
            inspire dancers to strive for excellence, as an act of worship. We
            foster teamwork, support, and encouragement, celebrating dance as a
            shared journey. Welcome to Histown!
          </p>
          <div className="button-container">
            <a
              href="https://app.thestudiodirector.com/histown/portal.sd?page=Login"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="register-btn">REGISTER</button>
            </a>
            <Link to="/free-trial">
              <button className="trial-btn">BOOK A TRIAL</button>
            </Link>
          </div>
        </div>
        <div className="image-container">
          <img src="https://i.imgur.com/4L3t1SQ.jpeg" alt="Dancers" />
        </div>
      </section>

      <DanceClasses />

      <MusicClasses />

      <FeaturedClasses />

      <Testimonials />

      <MeetOurTeam />

      <WhyUs />

      <NextSteps />

      <Footer />
    </div>
  );
};

export default Home;
