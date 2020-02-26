import React from 'react';
import { Route, Switch } from "react-router-dom";

import Spinner from './components/UI/Spinner/Spinner';

import ProjectShowcase from './containers/ProjectShowcase/ProjectShowcase';
import Project from './containers/Project/Project';

import './App.scss';

const App = () => {
  return (
    <div>
      <div>
      <Switch>
        <Route path="/project" component={Project}/>
        <Route path="/" component={ProjectShowcase} />
      </Switch>
      </div>

      {/* <div>
        <h2>This is working</h2>
      </div> */}
    </div>
    
  );
}

export default App;
