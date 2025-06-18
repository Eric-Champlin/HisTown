import React from "react";
import "./Birthday.css";
import NextSteps from "../Hooks/useInViewNextSteps";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BannerCarousel from "../components/BannerCarousel.tsx";

const Birthday = () => {
  return (
    <div>
      <NavBar />
      {/* Banner Section */}
      <BannerCarousel />


      <div style={{ textAlign: "center" }}>
        <h1 className="dance-classes-title">BIRTHDAY PARTIES</h1>
        <div className="underline-birthday"></div>
      </div>

      <div className="acro3-image">
        <img src="https://i.imgur.com/DY0xWaw.jpeg" alt="Dancers" />
      </div>

      {/* Text from the screenshot */}
      <div className="text-container-acro2">
        <p>
          At last your child’s birthday party! It’s 90 minutes of non-stop fun
          and celebration that includes an hour of dance instruction and games
          hosted and led by one of our teachers in one of our dance studios.
          Pick a theme and any style of dance including Ballet, Hip-Hop, Musical
          Theater, Jazz or Contemporary. Choose how old the partygoers are
          (Yes! We can host birthday parties too!)—we customize the fun and
          activities to make it a memorable experience. Then the party shifts
          to the party room for cake, presents, or party treats and taking
          awesome photos!
        </p>
        <p>
          <strong>We provide:</strong> All the table coverings, Happy Birthday
          banner, balloons, paper products, utensils, cups, forks, napkins, and
          tablecloths. Everything is set up prior to your arrival and we take
          care of cleaning up afterward so there is no stress or mess for you
          to deal with. Just enjoy your time on your child’s special day with
          friends and family!
        </p>
        <p>
          <strong>You provide:</strong> Birthday cake, drinks, snacks, or any
          other desired snacks or food. You also have the option to do some
          additional themed decorations if you want to. Let us help your day be
          truly special.
        </p>
        <p>
          <strong>Cost:</strong> $300 for up to 15 children plus $5 for each
          child above 15. A $100 non-refundable deposit is required to hold the
          date. $50 per additional half hour of party time requested past the
          ninety-minute mark. There is a non-refundable deposit of $150 at the
          time of making the reservation.
        </p>
        <p>
          <strong>Bounce House:</strong> You can add in our Bounce House to the
          party! Restrictions may apply depending on the age and number of
          guests in attendance. $80 for a ninety-minute party. Some set-up time
          is required.
        </p>
        <p>
          <strong>Ballerina Appearance:</strong> Add on a memorable experience
          by inviting a ballerina to your party! Dressed in a tutu, this ballet
          dancer will dance and put on a performance for the party-goers! Cost:
          $75
        </p>
        <p>
          <strong>Balloon Cluster:</strong> Enhance the aesthetic by adding a
          balloon cluster! Just choose your color palette and we’ll take care of
          the rest! Cost: $75
        </p>
      </div>

      <NextSteps />
      <Footer />
    </div>
  );
};

export default Birthday;
