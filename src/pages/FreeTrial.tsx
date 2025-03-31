import React from "react";
import "./FreeTrial.css";
import NavBar from "../components/NavBar.tsx";
import Footer from "../components/Footer.tsx";
import FreeTrialMotion from "../Hooks/useInViewFreeTrial.tsx";


const FreeTrial = () => {
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
  <h1 className="dance-classes-title">FREE TRIAL</h1>
  <div className="underline-trial"></div>
  <p className="free-trial-description1">
    Histown is offering a week of free trial classes! New students are welcome to try out as many classes as you want in one week in order to get an idea of which ones make the best fit for your dancers. No obligation. No strings attached. Then at the end of the week, you only pay for the classes you decide to enroll in for the semester. You don't pay for any of the other classes you tried out that week. Please note that our free trial offer does not apply to our summer dance camps and workshops.
    </p>
    <p className="free-trial-description2">
    To ensure there's space for your dancer to attend these classes please register below. After entering your information look for the link "Request trial class/drop-in class" to select the free trial classes you'd like to take. If you have any questions regarding which level/types of classes to select please feel free to contact us at (615) 840-8849 or info@histown.com
  </p>
</div>

<FreeTrialMotion />
      <Footer />
    </div>
  );
};

export default FreeTrial;
