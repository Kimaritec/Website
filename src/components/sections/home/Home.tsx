import React from 'react';

import './home.scss';

export const Home = () => {
  return (
    <div className="homeSection">
      <div className="graphic"><span className="sr-only">Graphic of protein degrader</span></div>
      <div className="homeContent">
        <h2 className="kimaritecLogo">
          <span className="sr-only">Kimaritec</span>
        </h2>
        <p>Targeted protein degraders for treating cancer</p>
      </div>
    </div>
  )
}