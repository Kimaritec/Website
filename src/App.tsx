import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import {HomeView} from "./views/HomeView";
import {SolutionView} from "./views/SolutionView";
import {PeopleView} from "./views/PeopleView";

function App() {
  return (
    <BrowserRouter basename="/Website">
      <Routes>
        <Route path="/" Component={ HomeView } />
        <Route path="/solution" Component={ SolutionView } />
        <Route path="/people" Component={ PeopleView } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
