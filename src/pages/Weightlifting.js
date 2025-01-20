import React from 'react';
import { Link } from 'react-router-dom';
import './Weightlifting.css';

const Weightlifting = () => {
  return (
    <div className="weightlifting-page">
      <div className="weightlifting-header">
        <h1>Weightlifting Anti-Doping Resources</h1>
        <p>Your guide to clean and fair weightlifting practices</p>
      </div>

      <div className="resources-container">
        {/* Articles Section */}
        <div className="resource-card">
          <Link to="/weightlifting-articles">
            <img
              src="article.jpg"
              alt="Articles"
              className="resource-image"
            />
            <h3>Articles</h3>
            <p>Read about doping challenges and best practices in weightlifting.</p>
          </Link>
        </div>

        {/* Audio Section */}
        <div className="resource-card">
          <Link to="/weightlifting-audio">
            <img
              src="audio.png"
              alt="Audio"
              className="resource-image"
            />
            <h3>Audio</h3>
            <p>Listen to experts discuss anti-doping measures in weightlifting.</p>
          </Link>
        </div>

        {/* Videos Section */}
        <div className="resource-card">
          <Link to="/weightlifting-videos">
            <img
              src="video.png"
              alt="Videos"
              className="resource-image"
            />
            <h3>Videos</h3>
            <p>Watch inspiring videos promoting fair competition in weightlifting.</p>
          </Link>
        </div>

        {/* Stories Section */}
        <div className="resource-card">
          <Link to="/weightlifting-stories">
            <img
              src="story.jpg"
              alt="Stories"
              className="resource-image"
            />
            <h3>Stories</h3>
            <p>Learn from athletes' journeys to overcome doping scandals.</p>
          </Link>
        </div>

        {/* Do's and Don'ts Section */}
        <div className="resource-card">
          <Link to="/weightlifting-dosdonts">
            <img
              src="do.png"
              alt="Do's and Don'ts"
              className="resource-image"
            />
            <h3>Do's and Don'ts</h3>
            <p>Follow guidelines to stay safe and compliant in weightlifting.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Weightlifting;
