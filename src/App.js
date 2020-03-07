import React from 'react';
import { Route, Switch } from "react-router-dom";

import Spinner from './components/UI/Spinner/Spinner';

import ProjectShowcase from './containers/ProjectShowcase/ProjectShowcase';
import Project from './containers/Project/Project';
import WhatWeDo from './containers/WhatWeDo/WhatWeDo';

import './App.scss';

const App = () => {
  return (
    <div>
      <div>
      <Switch>
        {/* <Route path="/project:id" render={(props) => <Project {...props}/> }/> */}
        <Route path="/project:id" component={Project}/>
        <Route path="/whatwedo" component={WhatWeDo}/>
        <Route path="/aboutus" render={() => <div>About!</div>}/>
        <Route path="/career" render={() => <div>Career!</div>}/>
        <Route path="/contact" render={() => <div>Contact!</div>}/>
        <Route path="/" component={ProjectShowcase} />
      </Switch>
      </div>
    </div>
    
  );
}

export default App;
