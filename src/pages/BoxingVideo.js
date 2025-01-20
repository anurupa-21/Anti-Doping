import React from 'react';
import './BoxingVideo.css';

const BoxingVideo = () => {
  return (
    <div className="boxing-video-page">
      <div className="boxing-header">
        <h1>Boxing Anti-Doping Video Resources</h1>
        <p>Your guide to understanding anti-doping practices in boxing through video resources</p>
      </div>

      <div className="video-container">
        {/* Video 1 */}
        <div className="video-card">
          <h3>Anti-Doping Education for Boxers - Video</h3>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/u39eX2Mvr6I?si=kIcrU0XYa5Nl7I5H" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <button className="resource-link">
            <a href="https://youtu.be/u39eX2Mvr6I?si=kIcrU0XYa5Nl7I5H" target="_blank" rel="noopener noreferrer">
              Watch Now
            </a>
          </button>
        </div>

        {/* Video 2 */}
        <div className="video-card">
          <h3>Importance of Clean Sports in Boxing - Video</h3>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/6NmfnZhBWTU?si=kEfRijrMYHjUaMYm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <button className="resource-link">
            <a href="https://youtu.be/6NmfnZhBWTU?si=kEfRijrMYHjUaMYm" target="_blank" rel="noopener noreferrer">
              Watch Now
            </a>
          </button>
        </div>

        {/* Video 3 */}
        <div className="video-card">
          <h3>Role of Coaches in Boxing Anti-Doping - Video</h3>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/N2xRGW9utHw?si=CGsenx4WLMYC0Ufc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <button className="resource-link">
            <a href="https://youtu.be/N2xRGW9utHw?si=IWUUCMKs-7r5O76r" target="_blank" rel="noopener noreferrer">
              Watch Now
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BoxingVideo;