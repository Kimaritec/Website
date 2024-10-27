import React from "react"
import {PlatformDiagram} from "./PlatformDiagram";

export const Platform = () => {
  return (
    <div className="platform">
      <h4><strong className="branded">Kimaritec’s</strong> targeted protein degradation platform;</h4>
      <ol>
        <li>
          Identifies proteins SUMOylated for stability in cancer cells and that then promote cancer cell viability
        </li>

        <li>
            Confirms that target protein SUMOylation is specifically seen in the diseased cells and not in normal cells = disease specificity
        </li>

        <li>
          Identifies the modified lysine that should be targeted
        </li>

        <li>
          Designs small drug-like molecules that can block the specific SUMOylation event and destabilise the target protein sending it to the proteasome for degradation
        </li>
      </ol>

      <PlatformDiagram />
    </div>
  );
}