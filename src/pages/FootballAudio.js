import React from 'react';
import './FootballAudio.css';

const FootballAudio = () => {
  return (
    <div className="athletics-audio-page">
      <div className="athletics-header">
        <h1>Football Anti-Doping Audio Resources</h1>
        <p>Your guide to understanding anti-doping practices in football through audio resources</p>
      </div>

      <div className="audio-container">
        {/* Audio 1 */}
        <div className="audio-card">
          <h3>Anti-Doping Awareness in Football - Podcast</h3>
          <iframe 
            src="https://player.fireside.fm/v2/SEoF0pzX+_9JTVILF?theme=dark" 
            width="300" 
            height="200" 
            frameBorder="0" 
            scrolling="no" 
            title="Anti-Doping Awareness in Athletics Podcast"
          ></iframe>
          <button className="resource-link">
            <a href="https://player.fireside.fm/v2/SEoF0pzX+_9JTVILF?theme=dark" target="_blank" rel="noopener noreferrer">
              Listen Now
            </a>
          </button>
        </div>

        {/* Audio 2 */}
        <div className="audio-card">
          <h3>Understanding the Impact of Doping - Podcast</h3>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/show/4tBispbp2qYjTR3Loan3t5?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Anti-Doping Awareness in Athletics Podcast"
          ></iframe>
          <button className="resource-link">
            <a href="https://open.spotify.com/embed/show/4tBispbp2qYjTR3Loan3t5?utm_source=generator" target="_blank" rel="noopener noreferrer">
              Listen Now
            </a>
          </button>
          
        </div>

       
        </div>
      </div>
    
  );
};

export default FootballAudio;