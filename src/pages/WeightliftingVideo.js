import React from 'react';
import './WeightliftingVideo.css';

const WeightliftingVideo = () => {
  return (
    <div className="weightlifting-video-page">
      <div className="weightlifting-header">
        <h1>Weightlifting Anti-Doping Video Resources</h1>
        <p>Your guide to understanding anti-doping practices in weightlifting through video resources</p>
      </div>

      <div className="video-container">
        {/* Video 1 */}
        <div className="video-card">
          <h3>Safe Practices in Weightlifting - Video</h3>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/6ah4yixGWc4?si=vPuW0OyCQ-98b6WQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <button className="resource-link">
            <a
              href="https://youtu.be/6ah4yixGWc4?si=vPuW0OyCQ-98b6WQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch Now
            </a>
          </button>
        </div>

        {/* Video 2 */}
        <div className="video-card">
          <h3>Anti-Doping Guidelines for Weightlifters</h3>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/dmpdqMBRryI?si=7pE2yFbIdrs-6pRc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <button className="resource-link">
            <a
              href="https://youtu.be/dmpdqMBRryI?si=7pE2yFbIdrs-6pRc"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch Now
            </a>
          </button>
        </div>

        {/* Video 3 */}
        <div className="video-card">
          <h3>The Importance of Clean Weightlifting</h3>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/5tx_ubICVLw?si=GbpCepD2n0T7nD3L" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <button className="resource-link">
            <a
              href="https://youtu.be/5tx_ubICVLw?si=GbpCepD2n0T7nD3L"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch Now
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WeightliftingVideo;