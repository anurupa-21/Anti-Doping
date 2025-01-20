/*import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Resources.css';

const Resources = () => {
  const navigate = useNavigate();

  return (
    <div className="resources-page">
     
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

export default Resources;*/

import React from 'react';
import { Link } from 'react-router-dom';  // Import Link
import './Resources.css';

const Resources = () => {
  return (
    <div className="resources-page">
      {/* Upper Section */}
      <div className="resource-header">
        <div className="header-content">
          <h1>Explore Resources</h1>
        </div>
      </div>

      {/* Lower Section: Sports Categories */}
      <div className="resource-categories">
        <div className="category-card">
          <Link to="/athletics">
            <img src="athletics.jpg" alt="Athletics" />
            <p className='p'>Athletics</p>
          </Link>
        </div>
        <div className="category-card">
          <Link to="/cycling">
            <img src="cycling.jpg" alt="Cycling" />
            <p className='p'>Cycling</p>
          </Link>
        </div>
        <div className="category-card">
          <Link to="/wrestling">
            <img src="wrestling.jpg" alt="Wrestling" />
            <p className='p'>Wrestling</p>
          </Link>
        </div>
        <div className="category-card">
          <Link to="/weightlifting">
            <img src="weightlifting.jpg" alt="Weightlifting" />
            <p className='p'>Weightlifting</p>
          </Link>
        </div>
        <div className="category-card">
          <Link to="/cricket">
            <img src="cricket.jpg" alt="Cricket" />
            <p className='p'>Cricket</p>
          </Link>
        </div>
        <div className="category-card">
          <Link to="/football">
            <img src="football.jpg" alt="Football/Soccer" />
            <p className='p'>Football</p>
          </Link>
        </div>
        <div className="category-card">
          <Link to="/boxing">
            <img src="boxing.jpeg" alt="Boxing" />
            <p className='p'>Boxing</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Resources;
