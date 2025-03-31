import React from "react";
import "./Testimonials.css";
import NavBar from "../components/NavBar.tsx";
import Footer from "../components/Footer.tsx";
import NextSteps from "../Hooks/useInViewNextSteps.tsx";
import Testimonials from "../Hooks/useInViewTestimonials.tsx";



const Acro = () => {
  return (
    <div>
      <NavBar />

      <div className="classes-banner">
        <img
          src="https://i.imgur.com/poLiUHv.png"
          alt="Classes Banner"
          className="classes-banner-image"
        />
      </div>

      <section className="testimonials-section2">
      <h1
        className={`testimonials-title`}
      >
        TESTIMONIALS
      </h1>
      <div
        className={`testimonial-images`}
      >
        <img
          src="https://i.imgur.com/Kau78rI.png"
          alt="Testimonial Graphic 1"
        />
        <img
          src="https://i.imgur.com/kJ8BGVS.png"
          alt="Testimonial Graphic 2"
          className="testimonial-image-larger"
        />
      </div>
      <div
        className={`testimonials-cards`}
      >
        <div className="testimonial-card">
          <h3 className="testimonial-author">Emily Song</h3>
          <div className="testimonial-stars">★★★★★</div>
          <p className="testimonial-text">
            My daughter just completed her first semester at Histown and it has
            been an incredibly positive experience! The teachers are gracious,
            kind, and very knowledgeable about dance and the instructional
            tools/pacing needed to help students succeed at various age levels.
            I have been so impressed with my daughter's gross motor development,
            ballet vocabulary, and increased ability to focus over the last 5
            months. She went from being very reluctant to be with strangers to
            being SO excited to dance and see her teachers each week!
          </p>
        </div>
        <div className="testimonial-card">
          <h3 className="testimonial-author">Justine Vild</h3>
          <div className="testimonial-stars">★★★★★</div>
          <p className="testimonial-text">
            My daughter has been dancing at Histown for many years. There are
            lots of things I love about this studio, not the least of them being
            that it's a Christian dance studio. I love their scheduling. It's
            very easy for my daughter to take 6 hours of dance over 2 evenings.
            They align their scheduling just right. And those could be 6
            different styles of dance at that! I love that their costumes for
            recitals are modest and the songs are either Christian or "clean"
            songs. I love that they don't gouge you on recital or costume fees.
            I love that they pray before classes. Precious studio to dance at!
          </p>
        </div>
        <div className="testimonial-card">
          <h3 className="testimonial-author">Kathleen Crews</h3>
          <div className="testimonial-stars">★★★★★</div>
          <p className="testimonial-text">
            Histown provides the healthy dance experience I wanted for my
            daughter. The owners, teachers, and office manager have created a
            family-like atmosphere where dancers support and cheer for each
            other. There’s the right amount of pressure for growth with the
            students excited to grow as a dancer; not a stressing environment
            whatsoever. Excellent teaching, genuine mentorship, meaningful
            friendships, modest costumes, and Christ being at the center of the
            dance company are all reasons our children plan to dance at Histown
            for many years to come.
          </p>
        </div>
      </div>
    </section>


<NextSteps />

      <Footer />
    </div>
  );
};

export default Acro;
