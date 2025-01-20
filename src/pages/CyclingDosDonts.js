import React from 'react';
import './CyclingDosDonts.css';

const CyclingDosDonts = () => {
  return (
    <div className="dos-donts-page">
      <div className="dos-donts-header">
        <h1>Cycling Dos and Don'ts</h1>
        <p>Essential guidelines for cyclists to ensure fair play and avoid doping</p>
      </div>
      <div className="dos-donts-content">
        <div className="dos-section">
          <h2 className="section-title">Dos</h2>
          <ol>
            <li className="dos-item"><strong>Do</strong> train regularly and maintain a healthy fitness routine.</li>
            <li className="dos-item"><strong>Do</strong> consume a balanced diet rich in nutrients.</li>
            <li className="dos-item"><strong>Do</strong> stay hydrated before, during, and after cycling.</li>
            <li className="dos-item"><strong>Do</strong> follow your coach's guidance and track your progress.</li>
            <li className="dos-item"><strong>Do</strong> get adequate rest and recovery between rides.</li>
            <li className="dos-item"><strong>Do</strong> use cycling equipment approved by your cycling federation.</li>
          </ol>
        </div>
        <div className="donts-section">
          <h2 className="section-title">Don'ts</h2>
          <ol>
            <li className="donts-item"><strong>Don't</strong> use performance-enhancing drugs or substances.</li>
            <li className="donts-item"><strong>Don't</strong> indulge in unethical shortcuts for better performance.</li>
            <li className="donts-item"><strong>Don't</strong> neglect the importance of mental health in cycling.</li>
            <li className="donts-item"><strong>Don't</strong> participate in cycling events without medical clearance if required.</li>
            <li className="donts-item"><strong>Don't</strong> ignore proper warm-up and cool-down exercises.</li>
            <li className="donts-item"><strong>Don't</strong> disregard the rules set by the cycling authorities and events.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default CyclingDosDonts;
