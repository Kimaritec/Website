import React from 'react';

import '../../../styles/icons/style.scss';

export const Icon: React.FC<{ icon: string }> = (
  {
    icon
  }
) => (
  <i role="presentation" aria-hidden="true" className={`icon icon-${ icon }`}></i>
);