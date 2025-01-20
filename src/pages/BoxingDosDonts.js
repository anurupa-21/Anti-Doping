import React from "react";
import "./AthleticsDosDonts.css"; // Reusing the same styles for consistency

const BoxingDosDonts = () => {
  return (
    <div className="dos-donts-page">
      <div className="dos-donts-header">
        <h1>Anti-Doping Do's and Don'ts for Boxers</h1>
        <p>Essential guidelines for boxers to stay clean and avoid anti-doping violations</p>
      </div>

      <div className="dos-donts-content">
        <div className="dos-section">
          <h2 className="section-title">Do's</h2>
          <ol className="dos-list">
            <li className="dos-item">
              <strong>Do</strong> maintain a balanced diet tailored to meet your weight class requirements.
            </li>
            <li className="dos-item">
              <strong>Do</strong> check with a certified medical professional before taking any medications.
            </li>
            <li className="dos-item">
              <strong>Do</strong> participate in anti-doping educational programs to stay informed.
            </li>
            <li className="dos-item">
              <strong>Do</strong> keep accurate records of all supplements and substances you consume.
            </li>
            <li className="dos-item">
              <strong>Do</strong> stay updated on the latest prohibited substance list by WADA.
            </li>
            <li className="dos-item">
              <strong>Do</strong> report any observed doping violations to the relevant authorities.
            </li>
          </ol>
        </div>

        <div className="donts-section">
          <h2 className="section-title">Don'ts</h2>
          <ol className="donts-list">
            <li className="donts-item">
              <strong>Don't</strong> consume unverified or non-certified supplements.
            </li>
            <li className="donts-item">
              <strong>Don't</strong> rely on performance-enhancing substances to gain an edge.
            </li>
            <li className="donts-item">
              <strong>Don't</strong> accept injections or medications from unauthorized personnel.
            </li>
            <li className="donts-item">
              <strong>Don't</strong> ignore the rules regarding Therapeutic Use Exemptions (TUEs).
            </li>
            <li className="donts-item">
              <strong>Don't</strong> attempt to falsify or evade doping tests during competitions.
            </li>
            <li className="donts-item">
              <strong>Don't</strong> risk disqualification by failing to disclose required information during testing.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default BoxingDosDonts;
