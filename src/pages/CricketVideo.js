import React from 'react';
import './CricketVideo.css';

const CricketVideo = () => {
  return (
    <div className="cricket-video-page">
      <div className="cricket-header">
        <h1>Cricket Anti-Doping Video Resources</h1>
        <p>Your guide to understanding anti-doping practices in cricket through video resources</p>
      </div>

      <div className="video-container">
        {/* Video 1 */}
        <div className="video-card">
          <h3>Anti-Doping Awareness in Cricket - Video</h3>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/XHQglcvAqBA?si=E62Z2xla4JWacrAC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <button className="resource-link">
            <a href="https://youtu.be/XHQglcvAqBA?si=E62Z2xla4JWacrAC" target="_blank" rel="noopener noreferrer">
              Watch Now
            </a>
          </button>
        </div>

        {/* Video 2 */}
        <div className="video-card">
          <h3>The Importance of Anti-Doping in Cricket - Video</h3>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/7whHd6wNjIw?si=PvJL74h6DLK9sMUQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <button className="resource-link">
            <a href="https://youtu.be/7whHd6wNjIw?si=PvJL74h6DLK9sMUQ" target="_blank" rel="noopener noreferrer">
              Watch Now
            </a>
          </button>
        </div>

        {/* Video 3 */}
        <div className="video-card">
          <h3>Cricket Anti-Doping - Understanding the Rules - Video</h3>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/l7EYeJvq7Fg?si=-bb37PwJP3n_aqMA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <button className="resource-link">
            <a href="https://youtu.be/l7EYeJvq7Fg?si=-bb37PwJP3n_aqMA" target="_blank" rel="noopener noreferrer">
              Watch Now
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CricketVideo;
