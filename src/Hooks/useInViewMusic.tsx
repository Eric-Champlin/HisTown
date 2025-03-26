import React from "react";
import { Link } from "react-router-dom";
import useInView from "./useInView.tsx";

const MusicClasses = () => {
  const { ref: bandRef, inView: bandVisible } = useInView<HTMLDivElement>({
    threshold: 0.1,
  });

  return (
    <section className="band-program">
      <div className="band-program-inner">
        <div
          className={`band-text-container slide-left ${bandVisible ? "show" : ""}`}
          ref={bandRef}
        >
          <div className="class-box">
            <h1>MUSIC CLASSES</h1>
            <p>
              We are proud to announce that we are now offering music lessons
              from talented instructors in piano, violin, and vocal!
            </p>
            <Link to="/classes/music" className="learn-more">
              LEARN MORE
            </Link>
          </div>
        </div>
        <div
          className={`band-image-container slide-right ${bandVisible ? "show" : ""}`}
        >
          <img
            src="https://i.imgur.com/P6AF87u.jpeg"
            alt="Band Program Student"
          />
        </div>
      </div>
    </section>
  );
};

export default MusicClasses;
