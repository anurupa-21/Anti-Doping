import React from 'react';
import { Link } from 'react-router-dom';
import './WeightliftingArticles.css';

const WeightliftingArticles = () => {
  return (
    <div className="weightlifting-articles-page">
      <div className="articles-header">
        <h1>Anti-Doping Articles in Weightlifting</h1>
        <p>Your comprehensive guide to understanding anti-doping in weightlifting through articles</p>
      </div>

      <div className="articles-container">
        {/* Article 1 */}
        <div className="article-card">
          <Link to="https://www.iwf.net/anti-doping/" target="_blank">
            <div className="article-image">
              <img src="iwf.png" alt="IWF Anti-Doping" />
            </div>
            <h3>IWF Anti-Doping Program</h3>
            <p>Explore the International Weightlifting Federation's comprehensive anti-doping initiatives.</p>
          </Link>
        </div>

        {/* Article 2 */}
        <div className="article-card">
          <Link to="https://www.wada-ama.org/en/what-we-do/world-anti-doping-code" target="_blank">
            <div className="article-image">
              <img src="wadc.png" alt="WADA Code" />
            </div>
            <h3>Understanding the World Anti-Doping Code</h3>
            <p>Learn about the global anti-doping framework and its relevance to weightlifting.</p>
          </Link>
        </div>

        {/* Article 3 */}
        <div className="article-card">
          <Link to="https://www.iwf.net/athletes/education/" target="_blank">
            <div className="article-image">
              <img src="aep.jpeg" alt="Athlete Education" />
            </div>
            <h3>Athlete Education Programs</h3>
            <p>Discover educational resources aimed at helping weightlifters stay informed about anti-doping rules.</p>
          </Link>
        </div>

        {/* Article 4 */}
        <div className="article-card">
          <Link to="https://www.iwf.net/anti-doping/sanctions/" target="_blank">
            <div className="article-image">
              <img src="sanction.jpeg" alt="Sanctions in Weightlifting" />
            </div>
            <h3>Sanctions in Weightlifting</h3>
            <p>Understand the consequences of anti-doping violations in the weightlifting community.</p>
          </Link>
        </div>

        {/* Article 5 */}
        <div className="article-card">
          <Link to="https://www.iwf.net/anti-doping/testing-program/" target="_blank">
            <div className="article-image">
              <img src="testing.jpg" alt="Testing Program" />
            </div>
            <h3>Anti-Doping Testing Program</h3>
            <p>Learn about the rigorous testing protocols designed to maintain fairness in weightlifting.</p>
          </Link>
        </div>

        {/* Article 6 */}
        <div className="article-card">
          <Link to="https://www.wada-ama.org/en/news/athlete-biological-passport" target="_blank">
            <div className="article-image">
              <img src="biological_passport.jpg" alt="Athlete Biological Passport" />
            </div>
            <h3>Athlete Biological Passport</h3>
            <p>Explore how biological passports are used to detect doping in weightlifting.</p>
          </Link>
        </div>

        {/* Article 7 */}
        <div className="article-card">
          <Link to="https://www.iwf.net/anti-doping/therapeutic-use-exemptions/" target="_blank">
            <div className="article-image">
              <img src="therapeutic_use.jpg" alt="Therapeutic Use Exemptions" />
            </div>
            <h3>Therapeutic Use Exemptions (TUE)</h3>
            <p>Understand the rules around TUEs and how athletes can compete while managing medical conditions.</p>
          </Link>
        </div>

        {/* Article 8 */}
        <div className="article-card">
          <Link to="https://www.iwf.net/news/" target="_blank">
            <div className="article-image">
              <img src="news.jpeg" alt="Anti-Doping News" />
            </div>
            <h3>Latest Anti-Doping News</h3>
            <p>Stay updated with the latest developments and news in anti-doping for weightlifting.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WeightliftingArticles;
