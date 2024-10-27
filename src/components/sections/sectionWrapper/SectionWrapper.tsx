import React, {ReactElement, ReactNode} from 'react';

import './sectionWrapper.scss';

export interface SectionProps {
  title: string;
  linkText?: string;
  description: string;
  id: string;
  component: ReactElement | ReactNode;
  hideTitle?: boolean;
}

export interface SectionWrapperProps {
  children?: React.ReactNode;
  section: SectionProps;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = (
  {
    children,
    section
  }
) => {
  const {
    id, title, hideTitle, component, linkText
  } = section;

  return (
    <div id={ id } className={ `sectionWrapper sectionWrapper${ linkText || title }`}>
      <div className="sectionContent">
        <h2 className={`sectionTitle ${hideTitle ? 'sr-only' : ''}`}>{title}</h2>
        {
          component
        }
      </div>
    </div>
  );
}