import React from 'react';
import './Home.css'; // Import the CSS for Home page styling

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <div className="home-body">
        <div className="background-image">
          <div className="hero-text">
            <h4>"Empowering Athletes with Anti-Doping Education"</h4>
            
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <p className="footer-text">
          We support every part of your lesson. Join us and start learning.
          <a href="/auth" className="footer-link">Click here</a> for joining.
        </p>
        <div className="social-media">
            Follow Us On:
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/download.png" alt="Instagram" className="social-icon" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="download (1).png" alt="Facebook" className="social-icon" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <img src="download (2).png" alt="YouTube" className="social-icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="download (3).png" alt="Twitter" className="social-icon" />
          </a>
          <a href="https://www.threads.net" target="_blank" rel="noopener noreferrer">
            <img src="download (4).png" alt="Threads" className="social-icon" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
