import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Resources.css';

const Resources = () => {
  const navigate = useNavigate();

  return (
    <div className="resources-page">
      {/* Upper Section */}
      <div className="resource-header">
        <div className="header-content">
          <h1>Explore Resources</h1>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search articles, videos, and more..."
              className="search-input"
            />
            <button
              type="button"
              className="search-button"
              onClick={() => alert('Search feature coming soon!')}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Lower Section */}
      <div className="resource-categories">
        <div
          className="category-card"
          onClick={() => navigate('/articles')}
        >
          <img src="article.jpg" alt="Articles" />
          <p>Articles</p>
        </div>
        <div
          className="category-card"
          onClick={() => navigate('/videos')}
        >
          <img src="video.png" alt="Videos" />
          <p>Videos</p>
        </div>
        <div
          className="category-card"
          onClick={() => navigate('/audios')}
        >
          <img src="audio.png" alt="Audios" />
          <p>Audios</p>
        </div>
        <div
          className="category-card"
          onClick={() => navigate('/infographics')}
        >
          <img src="story.jpg" alt="story" />
          <p>Story</p>
        </div>
        <div
          className="category-card"
          onClick={() => navigate('/animations')}
        >
          <img src="/animation.png" alt="Animations" />
          <p>Animations</p>
        </div>
      </div>
    </div>
  );
};

export default Resources;
