import React from 'react';
import {Header} from "./header/Header";
import {SectionDefinitions} from "../sections/sectionDefinitions";
import {SectionWrapper} from "../sections/sectionWrapper/SectionWrapper";
import {PageNavigation} from "./nav/PageNavigation";

export const DefaultLayout: React.FC<{ pageKey: string; showPageNav?: boolean }> = (
  {
    pageKey = 'home',
    showPageNav = true
  }
) => {
  const HandleReturnToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={`page ${ pageKey }`}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className="topOfPageLink" id="top" aria-hidden="true">Top of page</a>

      <Header />

      {
        showPageNav && <PageNavigation sections={SectionDefinitions[pageKey].sections}/>
      }

      {
        SectionDefinitions[pageKey].sections.map((section, index) => (
          <SectionWrapper section={section} key={section.id}/>
        ))
      }

      <button type="button" title="Top of page" className="sectionTopOfPageLink" onClick={HandleReturnToTop}>
        <span className="sr-only">Top of page</span>
      </button>
    </div>
  )
}