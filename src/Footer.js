import React from "react";
import "./Footer.css";
import {
  FaSquareFacebook,
  FaTwitter,
  FaSquareInstagram,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div>
        <h4>Follow Us</h4>
        <div className="social-icons">
          <div>
            <FaSquareFacebook />
          </div>
          <div>
            <FaTwitter />
          </div>
          <div>
            <FaSquareInstagram />
          </div>
        </div>
      </div>
      <div>
        <h4>Quick Links</h4>
        <a href="#" className="footer-link">
          Home
        </a>
        <a href="#" className="footer-link">
          Latest News
        </a>
        <a href="#" className="footer-link">
          Categories
        </a>
        <a href="#" className="footer-link">
          About Us
        </a>
      </div>
      <div>
        <p>&copy; 2023 Your News Website. All Rights Reserved.</p>
      </div>
      <div>
        <a href="#top" className="footer-link">
          Back to Top
        </a>
      </div>
    </footer>
  );
};

export default Footer;
