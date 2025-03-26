import React from "react";
import "./Tuition.css";
import NavBar from "../components/NavBar.tsx";
import Footer from "../components/Footer.tsx";
import NextSteps from "../Hooks/useInViewNextSteps.tsx";
import { Link } from "react-router-dom";

const Tuition = () => {
  return (
    <div className="tuition-page">
      <NavBar />
      {/* Banner Section */}
      <div className="classes-banner">
        <img
          src="https://i.imgur.com/poLiUHv.png"
          alt="Classes Banner"
          className="classes-banner-image"
        />
      </div>
      <div className="tuition-header">
        <h1 className="tuition-title">TUITION & FEES</h1>
        <div className="main-underline"></div>
      </div>

      <div className="tuition-content">
        <section className="tuition-section">
          <h2>Tuition</h2>
          <div className="section-underline"></div>
          <p>
            Tuition is calculated and based on the number of classes in any given
            semester (August - December and January - May) and is broken into
            five even payments per semester. We do not base tuition on the
            number of classes in any given month. So whether a month has less or
            more classes than others, the monthly payments stay the same. We make
            the assumption that you are signing up for the entire year (August
            2024 - May 2025). However, at the end of the fall semester in
            December, you can notify us if there are any class changes that you
            want to make for the spring semester, including dropping some or all
            classes and adding new ones.
          </p>
          <p>
            1st hour $90 per month. 2nd hour $70 per month. 3rd hour $55 per
            month. $35 per month for each additional hour.
          </p>
          <p>
            Unlike many studios that only offer you a small discount (usually
            around 10%) off the student with the lesser tuition, at Histown
            siblings get to directly piggyback off the first dancer's discounted
            tuition rate. For example: one student taking 2 hours of dance per
            week would be $160 per month. If a sibling also wanted to take one
            hour of dance per week, that would only be an additional $55 per
            month for a total of $215 per month for the family. If you have more
            than one child interested in dancing this can be a considerable
            savings for your family. There is a per student tuition cap of $410
            per month and a family cap of $590 per month. Every month tuition is
            the same amount. Histown does not prorate, reduce, or increase
            tuition for shorter months or longer months. Tuition can be paid in
            full at the beginning of the semester or split into monthly payments.
          </p>
          <p>
            We ask families to sign up for auto-pay to have tuition drafted
            automatically on the first of each month from your credit card, debit
            card or checking account. Tuition for August will be automatically
            deducted on or after August 6th. Every month thereafter tuition will
            automatically be deducted the 1st of the month for the rest of the
            current semester. Note: Due to the rising cost of credit card service
            fees, in an effort to keep our tuition rates as low as possible and
            not raise them to offset that cost, starting August 1, 2024, all
            payments made with a credit card or debit card will have a 3.5%
            surcharge added. However, that surcharge can be avoided by setting up
            payment on your account to be processed through a checking account
            of your choice. Just log into your account and click on "Edit
            Payment - Method On File" to add a checking account to your profile.
          </p>
          <p>
            We do email statements and you can check your balance online on your
            account with HisTown where you can keep track of payments and fees. A
            $15 late fee will be added to monthly tuition if your tuition isn't
            paid by the first week of each month.
          </p>
        </section>

        <section className="fees-section">
          <div className="fee-column">
            <h3>Registration Fees</h3>
            <div className="section-underline"></div>
            <p>
              There is a $50 annual registration fee per student with a $125 per
              family cap (Non-refundable and non-transferable.) The
              registration fee, which reserves placement in classes the student
              has enrolled in, will be deducted when you first enroll.
            </p>

            <h3>Costume Fees</h3>
            <div className="section-underline"></div>
            <p>
              Costume fees for each performance vary. Histown strives to keep
              each cost down and our costume fees are typically very
              inexpensive, normally between $46-$65 each. A non-refundable
              deposit of $25 per costume is due around the first week of
              October. Final costume fees will be announced via email during the
              semester and balance of costume fees will be due towards the end
              of October. In the spring, a non-refundable deposit of $25 per
              costume is due in March. Final costume fees will be announced
              shortly after that via email and the balance of costume fees will
              be due in April.
            </p>

            <h3>Refunds & Withdrawals</h3>
            <div className="section-underline"></div>
            <p>
              There are no refunds for missed classes or canceled classes. If a
              class is canceled due to weather or you simply missed your class,
              you may take a make-up class at the same level or one level below.
            </p>
            <p>
              We ask for a semester commitment from each dancer. If you need to
              withdrawal early you will be expected to pay the remainder of the
              month, following month and costume fees if costumes have already
              been purchased for the dancer. Written notice at least two weeks
              prior to the end of any given month is required, to only be charged
              one additional month, or you may be charged for an extra month.
            </p>
          </div>

          <div className="fee-column">
            <h3>Recital Fees</h3>
            <div className="section-underline"></div>
            <p>
              Histown has a Spring performance and a Winter performance every
              year. Performances are held in mid-May and mid-December. Every
              class will participate in the performances unless otherwise stated
              on the schedule.
            </p>
            <p>
              There is a performance fee of $50 per dancer with a $125 cap per
              family. These fees help pay for renting the auditorium for
              rehearsals and performances, the stage director fees and additional
              help needed backstage. There is also a $15 video streaming /
              downloading fee per family that gives you access to all
              professionally produced recital performances. Tickets are $15 and
              children ages 3 and under are free if they sit on their parent's
              lap.
            </p>

            <h3>Late Payments</h3>
            <div className="section-underline"></div>
            <p>
              We do email statements and you can check your balance online on
              your account with HisTown where you can keep track of payments and
              fees. A $15 late fee will be added to monthly tuition if your
              tuition isn't paid by the first week of each month.
            </p>
          </div>
        </section>
      </div>

      <div className="faq-button-container">
        <Link to="/FAQ" className="all-dances-button-link">
          <button className="all-dances-button">ALL FAQ</button>
        </Link>
      </div>

      <NextSteps />
      <Footer />
    </div>
  );
};

export default Tuition;