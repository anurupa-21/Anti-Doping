import React from 'react';
import { Link } from 'react-router-dom';
import './CricketArticles.css';

const CricketArticles = () => {
  return (
    <div className="cricket-articles-page">
      <div className="articles-header">
        <h1>Anti-Doping Articles in Cricket</h1>
        <p>Your comprehensive guide to understanding anti-doping in cricket through articles</p>
      </div>

      <div className="articles-container">
        {/* Article 1 */}
        <div className="article-card">
          <Link to="https://www.wada-ama.org/en" target="_blank">
            <div className="article-image">
              <img src="wadalogo.jpg" alt="WADA" />
            </div>
            <h3>Raising the Game for Clean Sport</h3>
            <p>Learn how clean sport practices are shaping the future of cricket and the fight against doping.</p>
          </Link>
        </div>

        {/* Article 2 */}
        <div className="article-card">
          <Link to="https://www.cricket.com.au/anti-doping" target="_blank">
            <div className="article-image">
              <img src="cricketantidoping.jpg" alt="Cricket Anti-Doping" />
            </div>
            <h3>Understanding the Anti-Doping Rules in Cricket</h3>
            <p>Explore the core anti-doping regulations and their application in the world of cricket.</p>
          </Link>
        </div>

        {/* Article 3 */}
        <div className="article-card">
          <Link to="https://www.icc-cricket.com/about/cricket-anti-doping" target="_blank">
            <div className="article-image">
              <img src="icc_antidoping.png" alt="ICC Anti-Doping" />
            </div>
            <h3>ICC Anti-Doping Program</h3>
            <p>Understand the role of ICC in anti-doping efforts and how they are implemented in cricket worldwide.</p>
          </Link>
        </div>

        {/* Article 4 */}
        <div className="article-card">
          <Link to="https://www.wada-ama.org/en/news/wada-statement-cricket-doping" target="_blank">
            <div className="article-image">
              <img src="wada_cricket.jpeg" alt="WADA Cricket" />
            </div>
            <h3>WADA's Statement on Cricket Doping Scandal</h3>
            <p>Read WADA’s official statement on the doping scandal within the cricket world.</p>
          </Link>
        </div>

        {/* Article 5 */}
        <div className="article-card">
          <Link to="https://www.cricket.com.au/news/anti-doping-education-for-players-and-staff/2023-12-01" target="_blank">
            <div className="article-image">
              <img src="cricketeducation.jpeg" alt="Cricket Education" />
            </div>
            <h3>Anti-Doping Education for Players and Staff</h3>
            <p>Explore how anti-doping education is being provided to players and staff at all levels of cricket.</p>
          </Link>
        </div>

        {/* Article 6 */}
        <div className="article-card">
          <Link to="https://www.icc-cricket.com/about/cricket-integrity" target="_blank">
            <div className="article-image">
              <img src="integrity_cricket.jpg" alt="Cricket Integrity" />
            </div>
            <h3>Cricket Integrity and Anti-Doping</h3>
            <p>Learn about the intersection of integrity and anti-doping in cricket, and its importance to the sport's future.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CricketArticles;