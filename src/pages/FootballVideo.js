import React from 'react';
import './FootballVideo.css';

const FootballVideo = () => {
  return (
    <div className="football-video-page">
      <div className="football-header">
        <h1>Football Anti-Doping Video Resources</h1>
        <p>Your guide to understanding anti-doping practices in football through video resources</p>
      </div>

      <div className="video-container">
        {/* Video 1 */}
        <div className="video-card">
          <h3>Football: Clean Sport and Anti-Doping Awareness - Video</h3>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/58L1_MCZbRM?si=j9y6AjMnnACaj1Xh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <button className="resource-link">
            <a href="https://youtu.be/58L1_MCZbRM?si=MfbPuRRrytsfBZex" target="_blank" rel="noopener noreferrer">
              Watch Now
            </a>
          </button>
        </div>

        {/* Video 2 */}
        <div className="video-card">
          <h3>Understanding Doping's Impact in Football - Video</h3>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/6HG8CpYGKfQ?si=bmH2frBTgpcpHkAf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <button className="resource-link">
            <a href="https://youtu.be/6HG8CpYGKfQ?si=g53C0G3NlFCqf-w2" target="_blank" rel="noopener noreferrer">
              Watch Now
            </a>
          </button>
        </div>

        {/* Video 3 */}
        <div className="video-card">
          <h3>The Role of Football Coaches in Anti-Doping - Video</h3>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/rt9lzXnfzdE?si=DFA5ODMlrcv5u42x" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <button className="resource-link">
            <a href="https://youtu.be/rt9lzXnfzdE?si=f-JXrtYXBovPiuQJ" target="_blank" rel="noopener noreferrer">
              Watch Now
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FootballVideo;
