import React from 'react';
import './Home.css';
import NavBar from '../components/NavBar.tsx';
import Footer from '../components/Footer.tsx';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from 'react-router-dom';
import DanceClasses from '../Hooks/useInViewDance.tsx'; 
import MusicClasses from '../Hooks/useInViewMusic.tsx'; 
import FeaturedClasses from '../Hooks/useInViewFeatured.tsx'; 
import Testimonials from '../Hooks/useInViewTestimonials.tsx'; 
import MeetOurTeam from '../Hooks/useInViewTeam.tsx'; 
import WhyUs from '../Hooks/useInViewWhyUs.tsx'; 
import NextSteps from '../Hooks/useInViewNextSteps.tsx'; 

const Home = () => {
  return (
    <div className="homepage">
      <NavBar />

      {/* =====================================
           Banner Carousel
      ===================================== */}
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        className="homepage-banner"
      >
        <div>
          <img src="https://i.imgur.com/poLiUHv.png" alt="Placeholder Image 1" />
        </div>
        <div>
          <img src="https://i.imgur.com/poLiUHv.png" alt="Placeholder Image 2" />
        </div>
        <div>
          <img src="https://i.imgur.com/poLiUHv.png" alt="Placeholder Image 3" />
        </div>
      </Carousel>

      {/* =====================================
           Our Mission Section
      ===================================== */}
      <section className="our-mission">
        <div className="text-container">
          <h1>OUR MISSION</h1>
          <p>
            Histown was founded over 20 years ago to provide dance training in a Christian setting, where dancers use their God‑given gifts for ministry, outreach, and entertainment. With a focus on strong technique and professional training, we create a positive and encouraging atmosphere filled with Christ’s love. Our goal is to inspire dancers to strive for excellence, as an act of worship. We foster teamwork, support, and encouragement, celebrating dance as a shared journey. Welcome to Histown!
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

      {/* =====================================
           Music Lessons Section
      ===================================== */}

{/* <section className="music-lessons">
  <div className="music-lessons-inner">
    <div className="music-image-container">
      <img
        src="https://i.imgur.com/xzDFa5h.jpeg"
        alt="Music Student Singing"
      />
    </div>
    <div className="music-text-container">
      <div className="class-box">
        <h1>DANCE CLASSES</h1>
        <p>
          Offering dance lessons in acro, ballet, barre fitness, contemporary,
          creative movement, foundations, hip‑hop, jazz, modern, musical theater,
          and tap!
        </p>
        <Link to="/classes/dance" className="learn-more">
          LEARN MORE
        </Link>
      </div>
    </div>
  </div>
</section> */}

<DanceClasses />

      {/* =====================================
           Band Program Section
      ===================================== */}
{/* <section className="band-program">
  <div className="band-program-inner">
    <div className="band-text-container">
      <div className="class-box">
        <h1>MUSIC CLASSES</h1>
        <p>
          We are proud to announce that we are now offering music lessons 
          from talented instructors in piano, violin, and vocal!
        </p>
        <Link to="/classes/music" className="learn-more-btn">
          LEARN MORE
        </Link>
      </div>
    </div>
    <div className="band-image-container">
      <img 
        src="https://i.imgur.com/P6AF87u.jpeg" 
        alt="Band Program Student"
      />
    </div>
  </div>
</section> */}

<MusicClasses />

      {/* =====================================
           FEATURED CLASSES Section
      ===================================== */}
      {/* <section className="other-lessons">
      <div className="other-lessons-inner">
        <div className="other-image-container">
          <img src="https://i.imgur.com/pcXgQqk.jpeg" alt="Music Student Singing" />
        </div>
        <div className="other-text-container">
        <div className="class-box">
          <h1>FEATURED </h1>
          <p>
            We also offer acting classes, adult dance classes, company classes, and classes at Goddard School of Franklin!
          </p>
          <Link to="/classes/featured" className="learn-more">LEARN MORE</Link>
        </div>
        </div>
        </div>
      </section> */}

      <FeaturedClasses />


      {/* =====================================
           Testimonials Section
      ===================================== */}
      {/* <section className="testimonials-section">
        <h1 className="testimonials-title">TESTIMONIALS</h1>
        <div className="testimonial-images">
          <img src="https://i.imgur.com/Kau78rI.png" alt="Testimonial Graphic 1" />
          <img src="https://i.imgur.com/kJ8BGVS.png" alt="Testimonial Graphic 2" className="testimonial-image-larger" />
        </div>
        <div className="testimonials-cards">
          <div className="testimonial-card">
            <h3 className="testimonial-author">Emily Song</h3>
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-text">
              My daughter just completed her first semester at Histown and it has been an incredibly positive experience! The teachers are gracious, kind, and very knowledgeable about dance and the instructional tools/pacing needed to help students succeed at various age levels. I have been so impressed with my daughter's gross motor development, ballet vocabulary, and increased ability to focus over the last 5 months. She went from being very reluctant to be with strangers to being SO excited to dance and see her teachers each week!
            </p>
          </div>
          <div className="testimonial-card">
            <h3 className="testimonial-author">Justine Vild</h3>
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-text">
              My daughter has been dancing at Histown for many years. There are lots of things I love about this studio, not the least of them being that it's a Christian dance studio. I love their scheduling. It's very easy for my daughter to take 6 hours of dance over 2 evenings. They align their scheduling just right. And those could be 6 different styles of dance at that! I love that their costumes for recitals are modest and the songs are either Christian or "clean" songs. I love that they don't gouge you on recital or costume fees. I love that they pray before classes. Precious studio to dance at!
            </p>
          </div>
          <div className="testimonial-card">
            <h3 className="testimonial-author">Kathleen Crews</h3>
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-text">
              Histown provides the healthy dance experience I wanted for my daughter. The owners, teachers, and office manager have created a family-like atmosphere where dancers support and cheer for each other. There’s the right amount of pressure for growth with the students excited to grow as a dancer; not a stressing enviornment whatsoever. Excellent teaching, genuine mentorship, meaningful friendships, modest costumes, and Christ being at the center of the dance company are all reasons our children plan to dance at Histown for many years to come.
            </p>
          </div>
        </div>
      </section> */}

      <Testimonials />

      {/* =====================================
           Meet Our Team Section
      ===================================== */}
      {/* <section className="meet-team">
        <h1 className="meet-team-heading">MEET OUR TEAM</h1>
        <div className="team-items">
          <Link to="/about/our-team/owners" className="team-item-link">
            <div className="team-item">
              <div className="team-card">
                <img src="https://i.imgur.com/H0VTGeM.png" alt="Owners" />
              </div>
              <p className="team-label">OWNERS</p>
            </div>
          </Link>
          <Link to="/about/our-team/dance" className="team-item-link">
            <div className="team-item">
              <div className="team-card">
                <img src="https://i.imgur.com/5dfj0Ng.png" alt="Dance" />
              </div>
              <p className="team-label">DANCERS</p>
            </div>
          </Link>
          <Link to="/about/our-team/music" className="team-item-link">
            <div className="team-item">
              <div className="team-card">
                <img src="https://i.imgur.com/zYc8QQs.png" alt="Music" />
              </div>
              <p className="team-label">MUSICIANS</p>
            </div>
          </Link>
        </div>
      </section> */}

      <MeetOurTeam />

      {/* =====================================
           Why Us? Section
      ===================================== */}
      {/* <section className="why-us">
        <div className="why-us-content">
          <h2 className="why-us-heading">WHY US?</h2>
          <p className="why-us-text">
            We provide dance instruction in a Christ-centered environment that nurtures each dancer’s God-given gifts for ministry, outreach, and entertainment. Through rigorous technique, professional mentorship, and an uplifting atmosphere guided by Christ’s love, our aim is to inspire dancers to pursue excellence as an act of worship.
          </p>
        </div>
        <div className="why-us-values">
          <div className="why-us-value-card">
            <div className="why-us-value-icon">
              <img src="https://i.imgur.com/EvDMKkV.png" alt="Icon 1" />
            </div>
            <h3 className="why-us-value-title">HIS HEART</h3>
            <p className="why-us-value-text">
              At the heart of our mission is God's love—a love that nurtures, uplifts, and calls us to use our gifts for His praise.
            </p>
          </div>
          <div className="why-us-value-card">
            <div className="why-us-value-icon">
              <img src="https://i.imgur.com/z23KLYZ.png" alt="Icon 2" />
            </div>
            <h3 className="why-us-value-title">HIS GLORY</h3>
            <p className="why-us-value-text">
              We dance not for the applause of people, but to reflect God's glory, honoring Him with excellence and joy.
            </p>
          </div>
          <div className="why-us-value-card">
            <div className="why-us-value-icon2">
              <img src="https://i.imgur.com/ug0O7NK.png" alt="Icon 3" />
            </div>
            <h3 className="why-us-value-title">HISTOWN</h3>
            <p className="why-us-value-text">
              Histown is more than a studio—it’s God’s town, where creativity, community, and worship come together in His name.
            </p>
          </div>
        </div>
      </section> */}

      <WhyUs />

      {/* =====================================
           Next Steps Section
      ===================================== */}
      {/* <section className="next-steps">
        <div className="next-steps-content">
          <h1 className="next-steps-heading">NEXT STEPS</h1>

          <div className="next-steps-boxes">
            <div className="next-step-box">
              <h3 className="step-title">TRIAL CLASSES</h3>
              <p className="step-description">
                Ready to learn? Try your first class!
              </p>
              <Link to="/free-trial">
                <button className="step-button">FREE TRIAL</button>
              </Link>
            </div>
            <div className="next-step-box">
              <h3 className="step-title">CONTACT US</h3>
              <p className="step-description">
                Have questions? Our team is here to help!
              </p>
              <Link to="/more/contact">
                <button className="step-button">GET IN TOUCH</button>
              </Link>
            </div>
          </div>
        </div>
      </section> */}

      <NextSteps />

      <Footer />
    </div>
  );
};

export default Home;
