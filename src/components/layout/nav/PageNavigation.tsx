import React from 'react';
import {SectionProps} from "../../sections/sectionWrapper/SectionWrapper";

import './pageNavigation.scss';

export interface PageNavigationProps {
  sections: SectionProps[]
}

export const PageNavigation: React.FC<PageNavigationProps> = (
  {
    sections
  }
) => {
  return (
    <nav className="pageNavigation">
      {
        sections.map((section, index) => (
          <a
            href={ `#${section.id}` }
            key={ `${section.id}Nav` }
            rel="noreferrer"
            className={ section.hideTitle ? 'sr-only' : '' }
          >
            { section.linkText || section.title }
          </a>
        ))
      }
    </nav>
  )
}