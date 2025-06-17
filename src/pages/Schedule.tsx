import React from "react";
import "./Schedule.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import NextSteps from "../Hooks/useInViewNextSteps";
import { Link } from "react-router-dom";



const Schedule = () => {
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
  <h1 className="dance-classes-title">SCHEDULE</h1>
  <div className="dance-classes-title-underline-schedule"></div>
</div>



<div className="schedule-image">
          <img src="https://i.imgur.com/aiEuRfl.jpeg" alt="Dancers" />
        </div>


        <a
  href="https://app.thestudiodirector.com/histown/portal.sd?page=Enroll&meth=search&SEASON=Fall+2017+-+Spring+2018"
  target="_blank"
  rel="noopener noreferrer"
  className="all-dances-button-link"
>
  <button className="all-dances-button">FULL CLASS SCHEDULE</button>
</a>


        <div className="text-container-acro">

        <p>
        <div className="calendar-info">
  <h1 className="header">2024 - 2025 Calendar</h1> <br />
  June 3rd - August 2nd - Summer Dance Camps<br />
  August 5th - First day of Fall Semester<br />
  September 2nd - Labor Day - (No classes)<br />
  October 7th-12th - Fall Break (No classes)<br />
  November 25th - 30th - Thanksgiving Break (No classes)<br />
  December 7th - Creative Movement Rehearsal At Histown<br />
  December 9th - Senior Recital Rehearsal <br />
  December 10th - Junior Recital Rehearsal <br />
  December 13th - 7pm Senior Recital At Bethel World Outreach Church<br />
  December 14th - 11am Creative Movement Recital 1:30pm Junior Recital - Bethel World Outreach Church<br />
  December 14th - Last day of Fall Semester<br />
  December 8th - January 11th - Christmas Break (No classes)<br />
  January 13th - First day of 2025 Spring Semester<br />
  March 10th - 15th - Spring Break (No classes)<br />
  May 3rd - Creative Movement Rehearsal At Histown<br />
  May 5th - Senior Recital Rehearsal <br />
  May 6th - Junior Recital Rehearsal <br />
  May 9th - Senior Recital <br />
  May 10th - Creative Movement Recital <br />
  May 10th - Junior Recital<br />
  May 10th - Last day of Spring Semester<br />
  June &amp; July - Weekly Summer Dance Camps!<br />
  August 4th - Beginning of Fall 2025 Semester!
</div>

        </p>
          </div>

<Link to="/FAQ" className="all-dances-button-link">
<button className="all-dances-button">ALL FAQ</button>
</Link>

<NextSteps />

      <Footer />
    </div>
  );
};

export default Schedule;
