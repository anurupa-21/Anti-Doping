/*import React from 'react';
import './Home.css'; 
const Home = () => {
  return (
    <div className="home">
      
      <div className="home-body">
        <div className="background-image">
          <div className="hero-text">
            <h4>"Empowering Athletes with Anti-Doping Education"</h4>
            
          </div>
        </div>
      </div>

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
*/
import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Home.css'; // Import the CSS for Home page styling

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section with Horizontal Carousel */}
      <div className="home-body">
        <Carousel interval={3000} indicators={true} controls={true}>
          <Carousel.Item>
            <img 
              src="/background1.jpg" 
              alt="First slide" 
              className="d-block w-100" 
            />
            <Carousel.Caption className="carousel-caption">
              <h5>"Empowering Athletes with Anti-Doping Education"</h5>
              <p>Learn how to protect yourself and your career.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img 
              src="/background2.png" 
              alt="Second slide" 
              className="d-block w-100" 
            />
            <Carousel.Caption className="carousel-caption">
              <h5>"Stay Informed, Stay Clean"</h5>
              <p>Stay updated on the latest in anti-doping education.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img 
              src="/background4.jpg" 
              alt="Third slide" 
              className="d-block w-100" 
            />
            <Carousel.Caption className="carousel-caption">
              <h5>"Join the Fight Against Doping"</h5>
              <p>Be a part of the global effort to keep sports clean.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
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
            <img src="/instagram.jpg" alt="Instagram" className="social-icon" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="facebook.jpg" alt="Facebook" className="social-icon" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <img src="utube.jpg" alt="YouTube" className="social-icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="X.jpg" alt="Twitter" className="social-icon" />
          </a>
          <a href="https://www.threads.net" target="_blank" rel="noopener noreferrer">
            <img src="thread.jpg" alt="Threads" className="social-icon" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;


