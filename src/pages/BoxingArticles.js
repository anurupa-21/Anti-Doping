import React from 'react';
import { Link } from 'react-router-dom';
import './BoxingArticles.css';

const BoxingArticles = () => {
  return (
    <div className="boxing-articles-page">
      <div className="articles-header">
        <h1>Boxing Articles</h1>
        <p>Your comprehensive guide to understanding boxing through articles</p>
      </div>

      <div className="articles-container">
        {/* Article 1 */}
        <div className="article-card">
          <Link to="https://www.wbaboxing.com/" target="_blank">
            <div className="article-image">
              <img src="wba-logo.jpg" alt="WBA" />
            </div>
            <h3>World Boxing Association (WBA)</h3>
            <p>Learn about the WBA, one of the most prominent boxing organizations worldwide.</p>
          </Link>
        </div>

        {/* Article 2 */}
        <div className="article-card">
          <Link to="https://www.boxingnews24.com/" target="_blank">
            <div className="article-image">
              <img src="boxing-news24.jpeg" alt="Boxing News" />
            </div>
            <h3>Boxing News 24</h3>
            <p>Stay updated with the latest boxing news, events, and analysis.</p>
          </Link>
        </div>

        {/* Article 3 */}
        <div className="article-card">
          <Link to="https://www.ibf-usba-boxing.com/" target="_blank">
            <div className="article-image">
              <img src="ibf-logo.png" alt="IBF" />
            </div>
            <h3>International Boxing Federation (IBF)</h3>
            <p>Explore the official website of the IBF and their boxing championships.</p>
          </Link>
        </div>

        {/* Article 4 */}
        <div className="article-card">
          <Link to="https://boxrec.com/" target="_blank">
            <div className="article-image">
              <img src="boxrec-logo.jpeg" alt="BoxRec" />
            </div>
            <h3>BoxRec</h3>
            <p>Discover boxing records, fighter rankings, and match results on BoxRec.</p>
          </Link>
        </div>

        {/* Article 5 */}
        <div className="article-card">
          <Link to="https://www.ringtv.com/" target="_blank">
            <div className="article-image">
              <img src="ring-magazine.jpg" alt="Ring Magazine" />
            </div>
            <h3>The Ring Magazine</h3>
            <p>Get in-depth boxing coverage from the world-renowned Ring Magazine.</p>
          </Link>
        </div>

        {/* Article 6 */}
        <div className="article-card">
          <Link to="https://www.wbcboxing.com/" target="_blank">
            <div className="article-image">
              <img src="wbc-logo.png" alt="WBC" />
            </div>
            <h3>World Boxing Council (WBC)</h3>
            <p>Learn more about the WBC and its major role in the world of boxing.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BoxingArticles;
