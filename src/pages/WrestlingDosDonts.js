import React from "react";
import "./WrestlingDosDonts.css";

const WrestlingDosDonts = () => {
  return (
    <div className="dos-donts-page">
      <div className="dos-donts-header">
        <h1>Anti-Doping Do's and Don'ts for Wrestlers</h1>
        <p>Essential tips for wrestlers to compete clean and maintain integrity in the sport.</p>
      </div>

      <div className="dos-donts-content">
        <div className="dos-section">
          <h2 className="section-title">Do's</h2>
          <ol className="dos-list">
            <li className="dos-item">
              <strong>Do</strong> review the banned substance list regularly to avoid prohibited substances.
            </li>
            <li className="dos-item">
              <strong>Do</strong> consult your coach and medical team before taking any supplements or medications.
            </li>
            <li className="dos-item">
              <strong>Do</strong> stay hydrated and consume a balanced diet to maintain peak performance.
            </li>
            <li className="dos-item">
              <strong>Do</strong> report any symptoms of overtraining or injuries to your medical team promptly.
            </li>
            <li className="dos-item">
              <strong>Do</strong> participate in educational programs on anti-doping to stay informed.
            </li>
            <li className="dos-item">
              <strong>Do</strong> maintain honesty during testing and adhere to all testing protocols.
            </li>
          </ol>
        </div>

        <div className="donts-section">
          <h2 className="section-title">Don'ts</h2>
          <ol className="donts-list">
            <li className="donts-item">
              <strong>Don't</strong> rely on unverified supplements or products that claim quick performance boosts.
            </li>
            <li className="donts-item">
              <strong>Don't</strong> skip anti-doping education sessions organized by your federation.
            </li>
            <li className="donts-item">
              <strong>Don't</strong> share your supplements or medications with teammates.
            </li>
            <li className="donts-item">
              <strong>Don't</strong> attempt to avoid or manipulate drug testing procedures.
            </li>
            <li className="donts-item">
              <strong>Don't</strong> ignore recovery protocols after matches or strenuous training sessions.
            </li>
            <li className="donts-item">
              <strong>Don't</strong> trust unregulated sources for nutritional advice or products.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default WrestlingDosDonts;
