import React from 'react';
import { Link } from 'react-router-dom';
import './AthleticsArticles.css';

const AthleticsArticles = () => {
  return (
    <div className="athletics-articles-page">
      <div className="articles-header">
        <h1>Anti-Doping Articles in Athletics</h1>
        <p>Your comprehensive guide to understanding anti-doping in athletics through articles</p>
      </div>

      <div className="articles-container">
        {/* Article 1 */}
        <div className="article-card">
          <Link to="https://www.wada-ama.org/en" target="_blank">
            <div className="article-image">
              <img src="wadalogo.jpg" alt="WADA" />
            </div>
            <h3>Raising the Game for Clean Sport</h3>
            <p>Learn how clean sport practices are shaping the future of athletics and the fight against doping.</p>
          </Link>
        </div>

        {/* Article 2 */}
        <div className="article-card">
          <Link to="https://www.athleticsintegrity.org/know-the-rules/understand-the-anti-doping-rules" target="_blank">
            <div className="article-image">
              <img src="antidopingrules.png" alt="AIU" />
            </div>
            <h3>Understanding the Anti-Doping Rules</h3>
            <p>Explore the core anti-doping regulations and their application in the world of athletics.</p>
          </Link>
        </div>

        {/* Article 3 */}
        <div className="article-card">
          <Link to="https://www.athleticsintegrity.org/know-the-rules/national-federation-anti-doping-obligations" target="_blank">
            <div className="article-image">
              <img src="nfad.jpeg" alt="AIU Obligations" />
            </div>
            <h3>National Federation Anti-Doping Obligations</h3>
            <p>Understand the responsibilities of national federations in ensuring clean sport at the grassroots level.</p>
          </Link>
        </div>

        {/* Article 4 */}
        <div className="article-card">
          <Link to="https://www.wada-ama.org/en/news/wada-statement-reuters-story-exposing-usada-scheme-contravention-world-anti-doping-code" target="_blank">
            <div className="article-image">
              <img src="usada.png" alt="USADA Scheme" />
            </div>
            <h3>WADA's Statement on USADA Scheme</h3>
            <p>Read WADA’s official statement on the Reuters story exposing a USADA scheme violating the anti-doping code.</p>
          </Link>
        </div>

        {/* Article 5 */}
        <div className="article-card">
          <Link to="https://www.wada-ama.org/en/news/statement-wada-president-politicization-anti-doping-united-states" target="_blank">
            <div className="article-image">
              <img src="president.jpeg" alt="WADA President Statement" />
            </div>
            <h3>WADA's Statement on the Politicization of Anti-Doping</h3>
            <p>Learn about WADA's stance on the increasing politicization of anti-doping efforts in the United States.</p>
          </Link>
        </div>

        {/* Article 6 */}
        <div className="article-card">
          <Link to="https://www.athleticsintegrity.org/disciplinary-process/first-instance-decisions" target="_blank">
            <div className="article-image">
              <img src="decision.jpeg" alt="First Instance Decisions" />
            </div>
            <h3>First Instance Decisions in Anti-Doping Cases</h3>
            <p>Explore detailed case studies and decisions made during the first instance of disciplinary processes in anti-doping cases.</p>
          </Link>
        </div>

        {/* Article 7 */}
        <div className="article-card">
          <Link to="https://www.athleticsintegrity.org/disciplinary-process/provisional-suspensions-in-force" target="_blank">
            <div className="article-image">
              <img src="athleticsintegrity.png" alt="Provisional Suspensions" />
            </div>
            <h3>Provisional Suspensions in Force</h3>
            <p>Learn more about athletes who are temporarily suspended during anti-doping investigations and proceedings.</p>
          </Link>
        </div>

        {/* Article 8 */}
        <div className="article-card">
          <Link to="https://www.wada-ama.org/en/data-research/anti-doping-statistics" target="_blank">
            <div className="article-image">
              <img src="statistics.jpg" alt="Anti-Doping Statistics" />
            </div>
            <h3>Anti-Doping Statistics</h3>
            <p>Get updated statistics on anti-doping test results, statistics on positive cases, and other relevant data.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AthleticsArticles;
