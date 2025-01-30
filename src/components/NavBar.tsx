import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import './NavBar.css';

const NavBar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="navbar">

        <div className="navbar-logo">
          <Link to="/home">
            <img src="https://i.imgur.com/XZQYSS5.png" alt="Logo" className="logo-image" />
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>


    {/* Links Section */}
    <ul className="navbar-links">
    <div><Link to="/home" className="navbar-link">HOME</Link></div>


     {/* Classes Dropdown */}
      <div className="navbar-dropdown-container">
      <Link to="/classes" className="navbar-link">CLASSES<FaChevronDown className="dropdown-chevron" /></Link>
      <div className="classes-dropdown-content">

    {/* Dance Column */}
    <div className="dropdown-column">
      <Link to="/classes/dance" className="dropdown-title dropdown-title-dance">DANCE</Link>
      <Link to="/classes/acro">Acro</Link>
      <Link to="/classes/ballet">Ballet</Link>
      <Link to="/classes/barre-fitness">Barre Fitness</Link>
      <Link to="/classes/contemporary">Contemporary</Link>
      <Link to="/classes/creative-movement">Creative Movement</Link>
      <Link to="/classes/hip-hop">Hip-Hop</Link>
      <Link to="/classes/jazz">Jazz</Link>
      <Link to="/classes/modern">Modern</Link>
      <Link to="/classes/mommy-and-me">Mommy & Me</Link>
      <Link to="/classes/musical-theater">Musical Theater</Link>
      <Link to="/classes/tap">Tap</Link>
    </div>

    {/* Music Column */}
    <div className="dropdown-column">
    <Link to="/classes/music" className="dropdown-title dropdown-title-dance">MUSIC</Link>
    <Link to="/classes/piano-lessons">Piano Lessons</Link>
      <Link to="/classes/violin-lessons">Violin Lessons</Link>
      <Link to="/classes/vocal-lessons">Vocal Lessons</Link>
    </div>

    {/* Featured Programs Column - Now properly positioned below "Music" */}
    <div className="dropdown-column featured-column">
      <Link to="/classes/featured" className="dropdown-title dropdown-title-dance">FEATURED</Link>
      <Link to="/classes/acting">Acting Classes</Link>
      <Link to="/classes/company">Company Classes</Link>
      <Link to="/classes/goddard-school">Goddard School</Link>
    </div>

    {/* FAQ Column - Now properly positioned below "Featured" */}
    <div className="dropdown-column faq-column">
      <Link to="/FAQ" className="dropdown-title dropdown-title-dance">FAQ</Link>
      <Link to="/classes/class-schedule">Class Schedule</Link>
      <Link to="/classes/dress-code">Dress Code</Link>
      <Link to="/classes/tuition-and-fees">Tuition & Fees</Link>
    </div>
  </div>
</div>



          {/* About Dropdown */}
          <div className="navbar-dropdown">
            <Link to="/about" className="navbar-link">ABOUT<FaChevronDown className="dropdown-chevron" /></Link>
            <div className="dropdown-content">
              <Link to="/about/our-team">OUR TEAM</Link>
              <Link to="/about/our-story">OUR STORY</Link>
              <Link to="/about/testimonials">TESTIMONIALS</Link>
              <Link to="/about/photos-videos">PHOTOS/VIDEOS</Link>
            </div>
          </div>
          
          {/* More Dropdown */}
          <div className="navbar-dropdown">
            <Link to="/more" className="navbar-link">MORE<FaChevronDown className="dropdown-chevron" /></Link>
            <div className="dropdown-content">
              <Link to="/more/birthday-parties">BIRTHDAY PARTIES</Link>
              <Link to="/more/studio-rental">STUDIO RENTAL</Link>
              <Link to="/more/contact">CONTACT</Link>
            </div>
          </div>

          
          <div><Link to="/store" className="navbar-link">STORE</Link></div>
        </ul>

        {/* Right Section: Social Icons */}
        <div className="navbar-icons">
        <div className="social-icons">
            <a href="https://www.instagram.com/histowndancestudio/" target="_blank" rel="noopener noreferrer" className="icon">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/HistownDanceStudio/" target="_blank" rel="noopener noreferrer" className="icon">
              <FaFacebookF />
            </a>
           
          </div>
          <Link to="/free-trial"><button className="navbar-button">FREE TRIAL</button></Link>
          <Link to="/login" className="navbar-link">LOGIN</Link>


         
        </div>
      </nav>
    </>
  );
};

export default NavBar;