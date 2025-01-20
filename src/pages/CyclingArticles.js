import React from 'react';
import { Link } from 'react-router-dom';
import './CyclingArticles.css';

const CyclingArticles = () => {
  return (
    <div className="cycling-articles-page">
      <div className="articles-header">
        <h1>Anti-Doping Articles in Cycling</h1>
        <p>Your comprehensive guide to understanding anti-doping in cycling through articles</p>
      </div>

      <div className="articles-container">
        {/* Article 1 */}
        <div className="article-card">
          <Link to="https://www.wada-ama.org/en" target="_blank">
            <div className="article-image">
              <img src="wadalogo.jpg" alt="WADA" />
            </div>
            <h3>Raising the Game for Clean Cycling</h3>
            <p>Learn how clean sport practices are shaping the future of cycling and the fight against doping.</p>
          </Link>
        </div>

        {/* Article 2 */}
        <div className="article-card">
          <Link to="https://www.uci.org/anti-doping" target="_blank">
            <div className="article-image">
              <img src="uci.png" alt="UCI Anti-Doping" />
            </div>
            <h3>Understanding the Anti-Doping Rules in Cycling</h3>
            <p>Explore the anti-doping regulations set by UCI and their application in professional cycling.</p>
          </Link>
        </div>

        {/* Article 3 */}
        <div className="article-card">
          <Link to="https://www.cyclingnews.com/news/anti-doping-steps-up-during-tour-de-france/" target="_blank">
            <div className="article-image">
              <img src="tdf.jpg" alt="Tour de France Anti-Doping" />
            </div>
            <h3>Anti-Doping Efforts During Tour de France</h3>
            <p>How the anti-doping measures are stepped up during the world’s most prestigious cycling race.</p>
          </Link>
        </div>

        {/* Article 4 */}
        <div className="article-card">
          <Link to="https://www.usada.org/sports/cycling/" target="_blank">
            <div className="article-image">
              <img src="usada.png" alt="USADA in Cycling" />
            </div>
            <h3>USADA's Role in Cycling</h3>
            <p>Read about USADA's involvement in cycling and its contribution to clean sport.</p>
          </Link>
        </div>

        {/* Article 5 */}
        <div className="article-card">
          <Link to="https://www.thecyclingdoping.com/" target="_blank">
            <div className="article-image">
              <img src="cyclingd.jpeg" alt="Cycling Doping" />
            </div>
            <h3>The Reality of Doping in Cycling</h3>
            <p>Insights into the historical and current issues surrounding doping in cycling.</p>
          </Link>
        </div>

        {/* Article 6 */}
        <div className="article-card">
          <Link to="https://www.anti-doping.org/clean-sport/athletes-education/cycling/" target="_blank">
            <div className="article-image">
              <img src="ec.jpg" alt="Clean Sport in Cycling" />
            </div>
            <h3>Education for Clean Cycling</h3>
            <p>Discover educational resources to promote clean sport in cycling and combat doping.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CyclingArticles;
