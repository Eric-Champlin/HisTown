import React from "react";
import { Link } from "react-router-dom";
import useInView from "./useInView";

const FreeTrialMotion = () => {
  // Observe the entire section; adjust threshold as needed.
  const { ref: nextStepsRef, inView: nextStepsVisible } =
    useInView<HTMLDivElement>({ threshold: 0.5 });

  return (
    <section className="next-steps" ref={nextStepsRef}>
      <div className="next-steps-content">

        <div className="next-steps-boxes">
          {/* Left box: Trial Classes - slide in from left */}
          <div
            className={`next-step-box slide-left ${nextStepsVisible ? "show delay-1" : ""}`}
          >
            <h3 className="step-title">REGISTER</h3>
            <p className="step-description">
              Ready to learn? Try your first week free!
            </p>
            <Link to="https://app.thestudiodirector.com/histown/portal.sd?page=Register">
              <button className="step-button">CLICK HERE</button>
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

export default FreeTrialMotion;
