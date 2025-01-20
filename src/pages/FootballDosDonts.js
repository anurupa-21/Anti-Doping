import React from "react";
import "./FootballDosDonts.css"; // Ensure you add relevant styles

const FootballDosDonts = () => {
  return (
    <div className="dos-donts-page">
      <div className="dos-donts-header">
        <h1>Football Do's and Don'ts</h1>
        <p>Guidelines to help football players stay clean and avoid doping violations</p>
      </div>

      <div className="dos-donts-content">
        <div className="dos-section">
          <h2 className="section-title">Do's</h2>
          <ol className="dos-list">
            <li className="dos-item">
              <strong>Do</strong> check the list of banned substances regularly.
            </li>
            <li className="dos-item">
              <strong>Do</strong> educate yourself about anti-doping rules specific to football.
            </li>
            <li className="dos-item">
              <strong>Do</strong> work closely with your team doctor to ensure any medications you
              take are approved by anti-doping agencies.
            </li>
            <li className="dos-item">
              <strong>Do</strong> stay hydrated and focus on a balanced diet for improved performance.
            </li>
            <li className="dos-item">
              <strong>Do</strong> choose supplements that are certified by recognized agencies.
            </li>
            <li className="dos-item">
              <strong>Do</strong> report any doping violations or suspicions to the appropriate authorities.
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
              <strong>Don't</strong> use performance-enhancing drugs (PEDs) to gain an advantage in matches.
            </li>
            <li className="donts-item">
              <strong>Don't</strong> attempt to manipulate or avoid drug tests.
            </li>
            <li className="donts-item">
              <strong>Don't</strong> share medications or supplements with teammates.
            </li>
            <li className="donts-item">
              <strong>Don't</strong> trust unverified sources for supplements or performance boosters.
            </li>
            <li className="donts-item">
              <strong>Don't</strong> risk your career by taking shortcuts to success.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default FootballDosDonts;
