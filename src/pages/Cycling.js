import React from 'react';
import { Link } from 'react-router-dom';
import './Cycling.css';

const Cycling = () => {
  return (
    <div className="cycling-page">
      <div className="cycling-header">
        <h1>Cycling Anti-Doping Resources</h1>
        <p>Your guide to understanding anti-doping practices in cycling</p>
      </div>

      <div className="resources-container">
        {/* Articles Section */}
        <div className="resource-card">
          <Link to="/cycling-articles">
            <img
              src="article.jpg"
              alt="Articles"
              className="resource-image"
            />
            <h3>Articles</h3>
            <p>Explore articles on doping practices and their impact on cycling.</p>
          </Link>
        </div>

        {/* Audio Section */}
        <div className="resource-card">
          <Link to="/cycling-audio">
            <img
              src="audio.png"
              alt="Audio"
              className="resource-image"
            />
            <h3>Audio</h3>
            <p>Listen to podcasts and interviews on anti-doping awareness in cycling.</p>
          </Link>
        </div>

        {/* Videos Section */}
        <div className="resource-card">
          <Link to="/cycling-videos">
            <img
              src="video.png"
              alt="Videos"
              className="resource-image"
            />
            <h3>Videos</h3>
            <p>Watch videos about the fight against doping in cycling.</p>
          </Link>
        </div>

        {/* Stories Section */}
        <div className="resource-card">
          <Link to="/cycling-stories">
            <img
              src="story.jpg"
              alt="Stories"
              className="resource-image"
            />
            <h3>Stories</h3>
            <p>Read personal stories of cyclists who overcame doping controversies.</p>
          </Link>
        </div>

        {/* Do's and Don'ts Section */}
        <div className="resource-card">
          <Link to="/cycling-dosdonts">
            <img
              src="do.png"
              alt="Do's and Don'ts"
              className="resource-image"
            />
            <h3>Do's and Don'ts</h3>
            <p>Learn the best practices to avoid doping risks in cycling.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cycling;
