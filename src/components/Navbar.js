import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Assuming your CSS is in Navbar.css

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src="logo.jpg" alt="Logo" className="logo-img" />
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
        <li>
          <Link to="/resources">Resources</Link>
        </li>
        <li>
          <Link to="/quizzes">Quizzes</Link>
        </li>
        <li>
          <Link to="/leaderboardachievements">Leaderboards</Link>
        </li>
      
      </ul>

      {/* Login Button */}
      <div className="login">
      <Link to="/auth"><button className="login-btn">Login</button></Link>
        
        
      </div>
    </nav>
  );
};

export default Navbar;
