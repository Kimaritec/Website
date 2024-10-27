import React from "react";
import {SectionProps} from "./sectionWrapper/SectionWrapper";
import {Home} from "./home/Home";
import {About} from "./about/About";
import {Sally} from "./people/Sally";
import {Mohanan} from "./people/Mohanan";
import {Wim} from "./people/Wim";
import {ProblemStatement} from "./solution/ProblemStatement";
import {OurSolution} from "./solution/OurSolution";
import {DegradationProcess} from "./solution/degradationProcess/DegradationProcess";
import {Platform} from "./solution/platform/Platform";
import {ValueProposition} from "./valueProposition/ValueProposition";

export interface SectionDefinitionsInterface {
  [pageKey:string]: {
    sections:  SectionProps[];
    routerPath: string;
  }
}

export const SectionDefinitions: SectionDefinitionsInterface = {
  home: {
    routerPath: '/',
    sections: [
      {
        id: 'home',
        title: 'Home',
        description: '',
        hideTitle: true,
        component: <Home/>
      },
      {
        id: 'about',
        title: 'About Kimaritec',
        linkText: 'About',
        description: '',
        component: <About/>
      },
      {
        id: 'valueProposition',
        title: 'Value Proposition',
        linkText: 'Value Proposition',
        description: '',
        component: <ValueProposition/>
      }
    ]
  },
  people: {
    routerPath: '/people',
    sections: [
      {
        id: 'sally',
        title: 'Sally',
        description: '',
        component: <Sally/>
      },
      {
        id: 'mohanan',
        title: 'Mohanan',
        description: '',
        component: <Mohanan/>
      },
      {
        id: 'wim',
        title: 'Wim',
        description: '',
        component: <Wim/>
      }
    ]
  },
  solution: {
    routerPath: '/solution',
    sections: [
      {
        id: 'theProblem',
        title: 'The problem',
        description: '',
        component: <ProblemStatement/>
      },
      {
        id: 'ourSolution',
        title: 'Our Solution',
        description: '',
        component: <OurSolution/>
      },
      {
        id: 'degradationProcess',
        title: 'Degradation Process',
        description: '',
        component: <DegradationProcess/>
      },
      {
        id: 'platform',
        title: 'Platform',
        description: '',
        component: <Platform/>
      }
    ]
  }
};