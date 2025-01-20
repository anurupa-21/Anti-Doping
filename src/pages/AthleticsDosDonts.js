// src/pages/DosDonts.js

// src/pages/AthleticsDosDonts.js
import React from "react";
import "./AthleticsDosDonts.css"; // Ensure you add relevant styles

const AthleticsDosDonts = () => {
  return (
    <div className="dos-donts-page">
      <div className="dos-donts-header">
        <h1>Anti-Doping Do's and Don'ts for Athletes</h1>
        <p>Guidelines to help athletes stay clean and avoid doping violations</p>
      </div>

      <div className="dos-donts-content">
        <div className="dos-section">
          <h2 className="section-title">Do's</h2>
          <ol className="dos-list">
            <li className="dos-item">
              <strong>Do</strong> check the list of banned substances regularly.
            </li>
            <li className="dos-item">
              <strong>Do</strong> educate yourself about anti-doping rules.
            </li>
            <li className="dos-item">
              <strong>Do</strong> work with your doctor to ensure any medications you
              take are approved by anti-doping agencies.
            </li>
            <li className="dos-item">
              <strong>Do</strong> stay hydrated and focus on nutrition to improve
              performance.
            </li>
            <li className="dos-item">
              <strong>Do</strong> ensure that any supplements you take are certified
              by recognized agencies.
            </li>
            <li className="dos-item">
              <strong>Do</strong> report any doping violations or suspicions to the
              appropriate authorities.
            </li>
          </ol>
        </div>

        <div className="donts-section">
          <h2 className="section-title">Don'ts</h2>
          <ol className="donts-list">
            <li className="donts-item">
              <strong>Don't</strong> take substances that are on the banned list.
            </li>
            <li className="donts-item">
              <strong>Don't</strong> use performance-enhancing drugs (PEDs) to improve
              your results.
            </li>
            <li className="donts-item">
              <strong>Don't</strong> ignore testing requirements or attempt to avoid
              drug tests.
            </li>
            <li className="donts-item">
              <strong>Don't</strong> share medications or supplements with others.
            </li>
            <li className="donts-item">
              <strong>Don't</strong> trust unverified supplement brands or sources.
            </li>
            <li className="donts-item">
              <strong>Don't</strong> risk your career and reputation by taking shortcuts
              in training or competition.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default AthleticsDosDonts;
