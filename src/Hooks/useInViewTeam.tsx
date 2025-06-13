import React from "react";
import { Link } from "react-router-dom";
import useInView from "./useInView.tsx";

const MeetOurTeam = () => {
  const { ref: teamRef, inView: teamVisible } = useInView<HTMLDivElement>({
    threshold: 0.2,
  });

  return (
    <section className="meet-team" ref={teamRef}>
      <h1
        className={`meet-team-heading fade-up ${teamVisible ? "show" : ""}`}
      >
        MEET OUR TEAM
      </h1>
      <div
        className={`team-items fade-up ${teamVisible ? "show delay-4" : ""}`}
      >
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
    </section>
  );
};

export default MeetOurTeam;
