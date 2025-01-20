import React from 'react';
import './CyclingVideo.css';

const CyclingVideo = () => {
  return (
    <div className="cycling-video-page">
      <div className="cycling-header">
        <h1>Cycling Anti-Doping Video Resources</h1>
        <p>Your guide to understanding anti-doping practices in cycling through video resources</p>
      </div>

      <div className="video-container">
        {/* Video 1 */}
        <div className="video-card">
          <h3>Anti-Doping Awareness in Cycling - Video</h3>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/x1HjzL7LhfM?si=ql5MLpHKa4JVTfSX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <button className="resource-link">
            <a href="https://youtu.be/x1HjzL7LhfM?si=ql5MLpHKa4JVTfSX" target="_blank" rel="noopener noreferrer">
              Watch Now
            </a>
          </button>
        </div>

        {/* Video 2 */}
        <div className="video-card">
          <h3>Understanding the Impact of Doping in Cycling - Video</h3>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/tuhQaB8oYj4?si=KGt4UzrvvnitzmaM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <button className="resource-link">
            <a href="https://youtu.be/tuhQaB8oYj4?si=KGt4UzrvvnitzmaM" target="_blank" rel="noopener noreferrer">
              Watch Now
            </a>
          </button>
        </div>

        {/* Video 3 */}
        <div className="video-card">
          <h3>The Role of Coaches in Anti-Doping Efforts in Cycling - Video</h3>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Dfl5wHZQ4_g?si=lwjp76STxyHPgBGS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <button className="resource-link">
            <a href="https://youtu.be/Dfl5wHZQ4_g?si=lwjp76STxyHPgBGS" target="_blank" rel="noopener noreferrer">
              Watch Now
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CyclingVideo;
