import React from 'react';
import { Link } from 'react-router-dom';
import './Athletics.css';

const Athletics = () => {
  return (
    <div className="athletics-page">
      <div className="athletics-header">
        <h1>Athletics Anti-Doping Resources</h1>
        <p>Your guide to understanding anti-doping practices in athletics</p>
      </div>

      <div className="resources-container">
        {/* Articles Section */}
        <div className="resource-card">
          <Link to="/athletics-articles">
            <img
              src="article.jpg"
              alt="Articles"
              className="resource-image"
            />
            <h3>Articles</h3>
            <p>Explore articles on doping practices and the impact on athletics.</p>
          </Link>
        </div>

        {/* Audio Section */}
        <div className="resource-card">
          <Link to="/athletics-audio">
            <img
              src="audio.png"
              alt="Audio"
              className="resource-image"
            />
            <h3>Audio</h3>
            <p>Listen to podcasts and interviews on anti-doping awareness.</p>
          </Link>
        </div>

        {/* Videos Section */}
        <div className="resource-card">
          <Link to="/athletics-videos">
            <img
              src="video.png"
              alt="Videos"
              className="resource-image"
            />
            <h3>Videos</h3>
            <p>Watch videos on the fight against doping in athletics.</p>
          </Link>
        </div>

        {/* Stories Section */}
        <div className="resource-card">
          <Link to="/athletics-stories">
            <img
              src="story.jpg"
              alt="Stories"
              className="resource-image"
            />
            <h3>Stories</h3>
            <p>Read personal stories of athletes who overcame doping controversies.</p>
          </Link>
        </div>

        {/* Do's and Don'ts Section */}
        <div className="resource-card">
          <Link to="/athletics-dosdonts">
            <img
              src="do.png"
              alt="Do's and Don'ts"
              className="resource-image"
            />
            <h3>Do's and Don'ts</h3>
            <p>Learn the best practices to avoid doping risks in athletics.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Athletics;


