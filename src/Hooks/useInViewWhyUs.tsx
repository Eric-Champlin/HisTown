import React from "react";
import useInView from "./useInView.tsx";

const WhyUs = () => {
  const { ref: whyUsRef, inView: whyUsVisible } = useInView<HTMLDivElement>({
    threshold: 0.2,
  });

  return (
    <section className="why-us" ref={whyUsRef}>
      <div
        className={`why-us-content fade-up ${whyUsVisible ? "show delay-3" : ""}`}
      >
        <h2 className="why-us-heading">WHY US?</h2>
        <p className="why-us-text">
          We provide dance instruction in a Christ‑centered environment that
          nurtures each dancer’s God‑given gifts for ministry, outreach, and
          entertainment. Through rigorous technique, professional mentorship,
          and an uplifting atmosphere guided by Christ’s love, our aim is to
          inspire dancers to pursue excellence as an act of worship.
        </p>
      </div>
      <div
        className={`why-us-values fade-up ${whyUsVisible ? "show delay-4" : ""}`}
      >
        <div className="why-us-value-card">
          <div className="why-us-value-icon">
            <img src="https://i.imgur.com/EvDMKkV.png" alt="Icon 1" />
          </div>
          <h3 className="why-us-value-title">HIS HEART</h3>
          <p className="why-us-value-text">
            At the heart of our mission is God's love—a love that nurtures,
            uplifts, and calls us to use our gifts for His praise.
          </p>
        </div>
        <div className="why-us-value-card">
          <div className="why-us-value-icon">
            <img src="https://i.imgur.com/z23KLYZ.png" alt="Icon 2" />
          </div>
          <h3 className="why-us-value-title">HIS GLORY</h3>
          <p className="why-us-value-text">
            We dance not for the applause of people, but to reflect God's glory,
            honoring Him with excellence and joy.
          </p>
        </div>
        <div className="why-us-value-card">
          <div className="why-us-value-icon2">
            <img src="https://i.imgur.com/ug0O7NK.png" alt="Icon 3" />
          </div>
          <h3 className="why-us-value-title">HISTOWN</h3>
          <p className="why-us-value-text">
            Histown is more than a studio—it’s God’s town, where creativity,
            community, and worship come together in His name.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
