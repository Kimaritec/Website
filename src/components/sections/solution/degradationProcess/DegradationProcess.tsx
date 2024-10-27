import React from 'react';

import './degradationProcess.scss';
import {Icon} from "../../../design/icons/Icon";

export const DegradationProcess = () => {
  return (
    <div className="degradationProcess">
      <ul>
        <li className="degradationStep1">
          <span className="label">The target protein is stabilised by SUMOylation</span>
          <Icon icon="arrow-down" />
        </li>
        <li className="degradationStep2">
          <span className="label"> Kimaritec SUMO blocker</span>
          <Icon icon="arrow-down" />
        </li>
        <li className="degradationStep3">
          <span className="label">The target protein is not SUMOylated</span>
          <Icon icon="arrow-down" />
        </li>
        <li className="degradationStep4">
          <span className="label">The target protein is degraded by proteasome</span>
        </li>
      </ul>
    </div>
  );
};