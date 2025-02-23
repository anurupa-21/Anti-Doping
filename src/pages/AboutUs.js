import React from "react";
import "./AboutUs.css"; // Link to your CSS file

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <section className="about-section">
        <div className="about-content left">
        <img src="/aboutus.jpg" alt="About Us" className="about-image" />
        </div>
        <div className="about-content right">
            <h2 className="about-us">About Us</h2>
          <p className="about-paragraph">
          At Pure Performance, we are revolutionizing the way atheletes and sports professionals engage with anti-doping education. Through our innovative gamified platform,we combine interactive learning with real world relevance,making it easier than ever for useers to understand and adopt clean sport practices.Our platform is designed to be engaging,accessible,and empowering-catering to atheletes,coaches, and sports enthusiasts of all levels.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="about-content right">
          <img src="mission.jpg" alt="Mission" className="about-image" />
        </div>
        <div className="about-content left">
        <h2 className="about-us">Mission</h2>
          <p className="about-paragraph">
           Our mission is to promote integrity and fairness in sports by providing athelets and sports professionals with accessible,engaging and effective anti-doping education. We aim to equip individuals with the knowledge and tools they need to complete cleanly and ethically,ensuring a future where sportmanship and excellence go hand in hand.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="about-content left">
          <img src="vision.jpg" alt="Vision" className="about-image" />
        </div>
        <div className="about-content right">
        <h2 className="about-us">Vision</h2>
          <p className="about-paragraph">
           We envision a world where every athelete,coach and sports enthusiasts understand the importance of clean competition and the danger of doping.By leveraging the power of technology and gamification,we strive to become a global leader in anti-doping education,fostering a sports culture that values honestly,hard work,and respect for the game.
          </p>
        </div>
      </section>

      <footer className="about-footer">
        <p>Follow us on:</p>
        <div className="social-media-icons">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="instagram.jpg" alt="Instagram" className="social-icon" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="facebook.jpg" alt="Facebook" className="social-icon" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <img src="utube.jpg" alt="YouTube" className="social-icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="X.jpg" alt="X" className="social-icon" />
          </a>
          <a href="https://www.threads.net" target="_blank" rel="noopener noreferrer">
            <img src="thread.jpg" alt="Threads" className="social-icon" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
