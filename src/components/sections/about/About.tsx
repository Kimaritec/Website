import React from 'react';

import './about.scss';

export const About: React.FC = () => (
  <div className="about">
    <p>
      Kimaritec Pty Ltd is a small start-up biotechnology company from the Queensland University of Technology (QUT) based in Brisbane, Australia. It started in February 2024.
    </p>

    <p>
      Kimarite, in sumo wrestling, refers to the winning technique or finishing move used to defeat an opponent, symbolizing precision and mastery in overcoming a challenge. At Kimaritech, this term resonates deeply with the company’s mission in the fight against cancer. By developing targeted protein degraders, Kimaritech employs a similarly strategic approach, using precise molecular "moves" to identify and break down cancer-causing proteins. Just as in sumo, where the right technique ensures victory, Kimaritech aims to dismantle cancer at its source through innovative and targeted therapies, delivering powerful, life-saving treatments.
    </p>

    <div className="logoFooter">
      <a id="qutLink" href="https://www.qut.edu.au/"><span className="sr-only">QUT</span></a>
      <div className="map" role="presentation" aria-hidden="true"></div>
      <div className="kimarite" role="presentation" aria-hidden="true"></div>
    </div>
  </div>
)