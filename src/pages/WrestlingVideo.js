import React from 'react';
import './WrestlingVideo.css';

const WrestlingVideo = () => {
  return (
    <div className="wrestling-video-page">
      <div className="wrestling-header">
        <h1>Wrestling Anti-Doping Video Resources</h1>
        <p>Your guide to understanding anti-doping practices in wrestling through video resources</p>
      </div>

      <div className="video-container">
        {/* Video 1 */}
        <div className="video-card">
          <h3>Anti-Doping Education for Wrestlers - Video</h3>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/sWhudwnE3Fg?si=udmpbwgX58Qs7rIR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <button className="resource-link">
            <a href="https://youtu.be/sWhudwnE3Fg?si=wP6hekgYNBMphr5l" target="_blank" rel="noopener noreferrer">
              Watch Now
            </a>
          </button>
        </div>

        {/* Video 2 */}
        <div className="video-card">
          <h3>Fair Play and Anti-Doping in Wrestling - Video</h3>
          <iframe 
    width="560" 
    height="315" 
    src="https://www.youtube.com/embed/MngcGCwg0Ls" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen>
</iframe>

          <button className="resource-link">
            <a href="https://youtube.com/shorts/MngcGCwg0Ls?si=S20qnM_OiRWu0gG8" target="_blank" rel="noopener noreferrer">
              Watch Now
            </a>
          </button>
        </div>

        {/* Video 3 */}
        <div className="video-card">
          <h3>The Role of Coaches in Wrestling Anti-Doping - Video</h3>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/nxeO_BU6dCg?si=KGZAosF_PV1aG2N4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <button className="resource-link">
            <a href="https://youtu.be/nxeO_BU6dCg?si=6WFD98qxjfwOTOUE" target="_blank" rel="noopener noreferrer">
              Watch Now
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WrestlingVideo;