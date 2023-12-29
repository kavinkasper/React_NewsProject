import React from "react";
import newsLogo from './Asserts/news-removebg-preview.png';
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <img src={newsLogo} alt="News Logo" />
      <p>The Pulse of the Planet</p>
    </div>
  );
};

export default Header;
