import React from 'react';
import { Link } from 'react-router-dom';

import './mainNavigation.scss';
import {SectionDefinitions} from "../../sections/sectionDefinitions";

export const MainNavigation: React.FC<{}> = () => {
  return (
    <nav className="mainNavigation">
      {
        Object.entries(SectionDefinitions).map(([sectionKey, section], index) => (
          <Link
            to={ section.routerPath }
            key={ `${sectionKey}MainHeaderNav` }
            rel="noreferrer"
          >
            { sectionKey }
          </Link>
        ))
      }
    </nav>
  )
}