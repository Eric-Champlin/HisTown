import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Left Section */}
      <div>
        <img
          src="https://i.imgur.com/AnZ5fj4.png"
          alt="HisTown Logo"
          className="footer-logo"
        />
        <div className="footer-section1">
          <div>1010 Perrone Way, Suite 200</div>
          <div>Franklin, TN, 37069</div>
          <div>(615) 840-8849</div>
          <div>info@histown.com</div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="footer-section">
        <p className="footer-title">QUICK LINKS</p>
        <Link to="/classes/dance" className="footer-link">
          Dance Classes
        </Link>
        <Link to="/classes/music" className="footer-link">
          Music Lessons
        </Link>
        <Link to="/more/contact" className="footer-link">
          Contact
        </Link>
        <Link to="/FAQ" className="footer-link">
          FAQ
        </Link>
      </div>

      {/* Right Section */}
      <div className="footer-section">
        <p className="footer-title">FOLLOW US</p>
        <div className="footer-icons">
          <a
            href="https://www.instagram.com/histowndancestudio/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/HistownDanceStudio/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FaFacebookF />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
