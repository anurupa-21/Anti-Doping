import React from 'react';
import { Link } from 'react-router-dom';
import './FootballArticles.css';

const FootballArticles = () => {
  return (
    <div className="football-articles-page">
      <div className="articles-header">
        <h1>Anti-Doping Articles in Football</h1>
        <p>Your comprehensive guide to understanding anti-doping in football through articles</p>
      </div>

      <div className="articles-container">
        {/* Article 1 */}
        <div className="article-card">
          <Link to="https://www.fifa.com/football-development/anti-doping" target="_blank">
            <div className="article-image">
              <img src="fifa-anti-doping.jpeg" alt="FIFA Anti-Doping" />
            </div>
            <h3>FIFA's Anti-Doping Program</h3>
            <p>Learn how FIFA is taking a strong stand against doping in football, setting up policies for clean sport.</p>
          </Link>
        </div>

        {/* Article 2 */}
        <div className="article-card">
          <Link to="https://www.uefa.com/insideuefa/disciplinary/anti-doping/" target="_blank">
            <div className="article-image">
              <img src="uefa-anti-doping.jpeg" alt="UEFA Anti-Doping" />
            </div>
            <h3>UEFA's Anti-Doping Measures</h3>
            <p>Discover UEFA's efforts in maintaining fair play and fighting doping practices within European football.</p>
          </Link>
        </div>

        {/* Article 3 */}
        <div className="article-card">
          <Link to="https://www.wada-ama.org/en/resources/anti-doping/anti-doping-in-football" target="_blank">
            <div className="article-image">
              <img src="wadalogo.jpg" alt="WADA Football Anti-Doping" />
            </div>
            <h3>Anti-Doping in Football: WADA's Role</h3>
            <p>Explore WADA’s involvement in upholding anti-doping rules and regulations in the world of football.</p>
          </Link>
        </div>

        {/* Article 4 */}
        <div className="article-card">
          <Link to="https://www.fifa.com/legal/anti-doping" target="_blank">
            <div className="article-image">
              <img src="fifa-legal.jpeg" alt="FIFA Legal Anti-Doping" />
            </div>
            <h3>FIFA's Legal Anti-Doping Framework</h3>
            <p>Understand FIFA’s comprehensive legal framework for combating doping and ensuring clean sport in football.</p>
          </Link>
        </div>

        {/* Article 5 */}
        <div className="article-card">
          <Link to="https://www.uefa.com/insideuefa/disciplinary/anti-doping/careers/" target="_blank">
            <div className="article-image">
              <img src="uefa-careers.jpeg" alt="UEFA Anti-Doping Careers" />
            </div>
            <h3>UEFA Anti-Doping Careers</h3>
            <p>Explore the opportunities for professionals in the anti-doping industry and UEFA’s efforts to recruit experts in the field.</p>
          </Link>
        </div>

        {/* Article 6 */}
        <div className="article-card">
          <Link to="https://www.fifa.com/womens-football/anti-doping-in-womens-football" target="_blank">
            <div className="article-image">
              <img src="fifa-women.jpeg" alt="FIFA Women's Football Anti-Doping" />
            </div>
            <h3>Anti-Doping in Women's Football</h3>
            <p>Learn about FIFA’s dedicated anti-doping measures in women’s football to ensure fair competition.</p>
          </Link>
        </div>

       
      </div>
    </div>
  );
};

export default FootballArticles;

