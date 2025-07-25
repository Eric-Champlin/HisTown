import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaChevronDown,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import "./NavBar.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  
  return (
    <nav className="navbar">
      {/* Desktop Logo */}
      <div className="navbar-logo">
        <Link to="/home">
          <img
            src="https://i.imgur.com/XZQYSS5.png"
            alt="Logo"
            className="logo-image"
          />
        </Link>
      </div>

      {/* Hamburger Icon (for mobile) */}
      <div className="hamburger" onClick={toggleMenu}>
        <FaBars className={`hamburger-icon ${menuOpen ? "hide" : "show"}`} />
        <FaTimes className={`hamburger-icon ${menuOpen ? "show" : "hide"}`} />
      </div>

      {/* Navigation Links */}
      <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <li>
          <Link to="/home" className="navbar-link">
            HOME
          </Link>
        </li>

        {/* Classes Dropdown */}
        <li className="navbar-dropdown-container">
          <Link to="/classes" className="navbar-link">
            CLASSES <FaChevronDown className="dropdown-chevron" />
          </Link>
          <div className="classes-dropdown-content">
            <div className="dropdown-column">
              <Link
                to="/classes/dance"
                className="dropdown-title dropdown-title-dance"
              >
                DANCE
              </Link>
              <Link to="/classes/acro">Acro</Link>
              <Link to="/classes/ballet">Ballet</Link>
              <Link to="/classes/barre-fitness">Barre Fitness</Link>
              <Link to="/classes/contemporary">Contemporary</Link>
              <Link to="/classes/creative-movement">Creative Movement</Link>
              <Link to="/classes/foundations">Foundations</Link>
              <Link to="/classes/hip-hop">Hip-Hop</Link>
              <Link to="/classes/jazz">Jazz</Link>
              <Link to="/classes/modern">Modern</Link>
              <Link to="/classes/mommy-and-me">Mommy &amp; Me</Link>
              <Link to="/classes/musical-theater">Musical Theater</Link>
              <Link to="/classes/tap">Tap</Link>
              <Link to="/classes/dance">View All</Link>
            </div>
            <div className="dropdown-column">
              <Link
                to="/classes/music"
                className="dropdown-title dropdown-title-dance"
              >
                MUSIC
              </Link>
              <Link to="/classes/piano-lessons">Piano Lessons</Link>
              <Link to="/classes/violin-lessons">Violin Lessons</Link>
              <Link to="/classes/vocal-lessons">Vocal Lessons</Link>
            </div>
            <div className="dropdown-column featured-column">
              <Link
                to="/classes/featured"
                className="dropdown-title dropdown-title-dance"
              >
                FEATURED
              </Link>
              <Link to="/classes/acting">Acting Classes</Link>
              <Link to="/classes/adult">Adult Classes</Link>
              <Link to="/classes/company">Company Classes</Link>
              <Link to="/classes/goddard-school">Goddard School</Link>
            </div>
            <div className="dropdown-column faq-column">
              <Link to="/FAQ" className="dropdown-title dropdown-title-dance">
                FAQ
              </Link>
              <Link to="/classes/class-schedule">Class Schedule</Link>
              <Link to="/classes/dress-code">Dress Code</Link>
              <Link to="/classes/tuition-and-fees">Tuition &amp; Fees</Link>
            </div>


          </div>

        </li>

        {/* About Dropdown */}
        <li className="navbar-dropdown">
          <Link to="/about" className="navbar-link">
            ABOUT <FaChevronDown className="dropdown-chevron" />
          </Link>
          <div className="dropdown-content">
            <Link to="/about/our-team">OUR TEAM</Link>
            <Link to="/about/our-story">OUR STORY</Link>
            <Link to="/about/testimonials">TESTIMONIALS</Link>
            <Link to="/about/photos-videos">K-LOVE FAN AWARDS</Link>
          </div>
        </li>

        {/* More Dropdown */}
        <li className="navbar-dropdown">
          <Link to="/more" className="navbar-link">
            MORE <FaChevronDown className="dropdown-chevron" />
          </Link>
          <div className="dropdown-content">
            <Link to="/more/birthday-parties">BIRTHDAY PARTIES</Link>
            <Link to="/more/studio-rental">STUDIO RENTAL</Link>
            <Link to="/more/contact">CONTACT</Link>
          </div>
        </li>
        <li>
        <Link to="/FAQ" className="navbar-link">
          FAQ <FaChevronDown className="dropdown-chevron" />
        </Link>
        </li>
        <li>
          <Link to="/store" className="navbar-link">
            STORE
          </Link>
        </li>

        {/* Mobile-Only: Logo, Social Icons, Free Trial & Login */}

        <div className="navbar-logo-mobile">
          <Link to="/home">
            <img
              src="https://i.imgur.com/XZQYSS5.png"
              alt="Logo"
              className="logo-image"
            />
          </Link>
        </div>

        <div className="navbar-icons-mobile">
          <div className="social-icons">
            <a
              href="https://www.instagram.com/histowndancestudio/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/HistownDanceStudio/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <FaFacebookF />
            </a>
          </div>
          <a
            href="https://app.thestudiodirector.com/histown/portal.sd?page=Login"
            target="_blank"
            rel="noopener noreferrer"
            className="login-mobile"
          >
            LOGIN
          </a>
          <Link to="/free-trial">
            <button className="free-trial-mobile">FREE TRIAL</button>
          </Link>
        </div>
      </ul>

      {/* Desktop-Only: Social Icons, Free Trial & Login */}

      <div className="navbar-icons">
        <div className="social-icons">
          <a
            href="https://www.instagram.com/histowndancestudio/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/HistownDanceStudio/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <FaFacebookF />
          </a>
        </div>
        <Link to="/free-trial">
          <button className="navbar-button">FREE TRIAL</button>
        </Link>
        <a
          href="https://app.thestudiodirector.com/histown/portal.sd?page=Login"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-link"
        >
          LOGIN
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
