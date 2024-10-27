import React from 'react';

import './platformDiagram.scss';

export const PlatformDiagram = () => {
  return (
    <div className="platformDiagram">
      <ol>
        <li>
          <span className="label">
            Database
          </span>

          <span className="value">
            <strong>Unbiased target identification and selection in disease cells</strong>
            Confirms loss of target in cancer cells when SUMOylation is blocked
          </span>
        </li>

        <li>
          <span className="label">
            SUMO
          </span>
          <span className="value">
            <strong>Disease relevant SUMOylation on target</strong>
            Confirms target is highly SUMOylated only in disease tissue
          </span>
        </li>

        <li>
          <span className="label">
            Lysine
          </span>
          <span className="value">
            <strong>Identification of modified lysine</strong>
            Confirms the single key lysine SUMOylated in disease
          </span>
        </li>

        <li>
          <span className="label">
            Drug
          </span>
          <span className="value">
            <strong>Streamlined drug discovery workflow</strong>
            Small molecule TPD therapeutics
          </span>
        </li>
      </ol>
    </div>
  );
};