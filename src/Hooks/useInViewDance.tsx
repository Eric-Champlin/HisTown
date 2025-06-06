import React from "react";
import { Link } from "react-router-dom";
// @ts-ignore
import useInView from "./useInView.tsx";

const DanceClasses = () => {
  const { ref: danceRef, inView: danceVisible } = useInView<HTMLDivElement>({
    threshold: 0.1,
  });

  return (
      <section className="music-classes">
        <div className="music-lessons-inner" ref={danceRef}>
          <div
              className={`music-image-container slide-left ${danceVisible ? "show" : ""}`}
          >
            <img src="https://i.imgur.com/HLP9IVj.jpeg" alt="Dance Classes" />
          </div>
          <div className="music-text-container">
            <div
                className={`class-box slide-right ${danceVisible ? "show" : ""}`}
            >
              <h1>DANCE CLASSES</h1>
              <p>
                Offering dance lessons in acro, ballet, barre fitness,
                contemporary, creative movement, foundations, hip‑hop, jazz,
                modern, musical theater, and tap!
              </p>
              <Link to="/classes/dance" className="learn-more">
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
      </section>
  );

};

export default DanceClasses;
