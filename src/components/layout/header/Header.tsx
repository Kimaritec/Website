import React from 'react';
import {MainNavigation} from "../nav/MainNavigation";

import './header.scss';

export const Header: React.FC<{}> = () => {
  return (
    <header className="mainHeader">
      <h1 className="mainHeaderLogo">
        <a className="kimaritecLogo" href="#top">
          <span className="sr-only">Scroll to top of page</span>
        </a>
      </h1>
      <MainNavigation />
    </header>
  )
}