import React from 'react';
import './AthleticsDosDonts.css'; // Assuming the provided CSS file is named AthleticsDosDonts.css

const CricketDosDonts = () => {
  return (
    <div className="dos-donts-page">
      <div className="dos-donts-header">
        <h1>Cricket Anti-Doping Dos and Don'ts</h1>
        <p>Follow these guidelines to maintain fair play and ensure a clean sport</p>
      </div>

      <div className="dos-donts-content">
        <div className="dos-section">
          <h2 className="section-title">Do's</h2>
          <ol>
            <li className="dos-item">
              <strong>Do</strong> ensure that all supplements and medications you take are checked for banned substances.
            </li>
            <li className="dos-item">
              <strong>Do</strong> maintain an updated list of your medical history and medications.
            </li>
            <li className="dos-item">
              <strong>Do</strong> stay hydrated and maintain a healthy diet to support your physical performance.
            </li>
            <li className="dos-item">
              <strong>Do</strong> familiarize yourself with the World Anti-Doping Agency (WADA) list of prohibited substances.
            </li>
            <li className="dos-item">
              <strong>Do</strong> report any suspicious activity related to doping or match-fixing.
            </li>
          </ol>
        </div>

        <div className="donts-section">
          <h2 className="section-title">Don'ts</h2>
          <ol>
            <li className="donts-item">
              <strong>Don't</strong> take any supplements or medications without verifying they are not on the banned list.
            </li>
            <li className="donts-item">
              <strong>Don't</strong> use performance-enhancing drugs (PEDs) to gain an unfair advantage in matches.
            </li>
            <li className="donts-item">
              <strong>Don't</strong> rely on unverified or underground sources for medications or supplements.
            </li>
            <li className="donts-item">
              <strong>Don't</strong> neglect regular anti-doping tests or fail to follow the testing procedures.
            </li>
            <li className="donts-item">
              <strong>Don't</strong> encourage or pressure others into taking banned substances.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default CricketDosDonts;
