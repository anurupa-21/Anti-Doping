import React from 'react';
import './AthleticsVideo.css';

const AthleticsVideo = () => {
  return (
    <div className="athletics-video-page">
      <div className="athletics-header">
        <h1>Athletics Anti-Doping Video Resources</h1>
        <p>Your guide to understanding anti-doping practices in athletics through video resources</p>
      </div>

      <div className="video-container">
        {/* Video 1 */}
        <div className="video-card">
          <h3>Anti-Doping Awareness in Athletics - Video</h3>
        
          <iframe width="560" height="315" src="https://www.youtube.com/embed/FCWMx9uJWPM?si=CZUXWVdbHopZRd21" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <button className="resource-link">
            <a href="https://youtu.be/FCWMx9uJWPM?si=CZUXWVdbHopZRd21" target="_blank" rel="noopener noreferrer">
              Watch Now
            </a>
          </button>
        </div>

        {/* Video 2 */}
        <div className="video-card">
          <h3>Understanding the Impact of Doping - Video</h3>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/4rUpX3QSPmw?si=ikHGosxwNdR-MPUU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <button className="resource-link">
            <a href="https://youtu.be/4rUpX3QSPmw?si=LceP6Ww3QcN3RYcc" target="_blank" rel="noopener noreferrer">
              Watch Now
            </a>
          </button>
        </div>

        {/* Video 3 */}
        <div className="video-card">
          <h3>The Role of Coaches in Anti-Doping Efforts - Video</h3>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/N2xRGW9utHw?si=eUbltUe_Ay93skYR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <button className="resource-link">
            <a href="https://youtu.be/N2xRGW9utHw?si=ygWkZu-mJAbiZiSe" target="_blank" rel="noopener noreferrer">
              Watch Now
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AthleticsVideo;
