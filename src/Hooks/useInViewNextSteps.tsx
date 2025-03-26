import React from "react";
import { Link } from "react-router-dom";
import useInView from "./useInView.tsx";

const NextSteps = () => {
  // Observe the entire section; adjust threshold as needed.
  const { ref: nextStepsRef, inView: nextStepsVisible } =
    useInView<HTMLDivElement>({ threshold: 0.5 });

  return (
    <section className="next-steps" ref={nextStepsRef}>
      <div className="next-steps-content">
        <h1
          className={`next-steps-heading fade-up ${nextStepsVisible ? "show" : ""}`}
        >
          NEXT STEPS
        </h1>
        <p
          className={`next-steps-text fade-up ${nextStepsVisible ? "show" : ""}`}
        >
          Ready to take the next step? Schedule a free trial or get in touch
          with our team!
        </p>
        <div className="next-steps-boxes">
          {/* Left box: Trial Classes - slide in from left */}
          <div
            className={`next-step-box slide-left ${nextStepsVisible ? "show delay-1" : ""}`}
          >
            <h3 className="step-title">TRIAL CLASSES</h3>
            <p className="step-description">
              Ready to learn? Try your first class!
            </p>
            <Link to="/free-trial">
              <button className="step-button">FREE TRIAL</button>
            </Link>
          </div>
          {/* Right box: Contact Us - slide in from right */}
          <div
            className={`next-step-box slide-right ${nextStepsVisible ? "show delay-1" : ""}`}
          >
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
    </section>
  );
};

export default NextSteps;
