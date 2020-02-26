import React from 'react';
import { Route, Switch } from "react-router-dom";

import Header from './components/Navigation/Header/Header';
import Spinner from './components/UI/Spinner/Spinner';

import ProjectShowcase from './containers/ProjectShowcase/ProjectShowcase';

import './App.scss';

const App = () => {
  return (
    <div>
      <div>
      <Switch>
        <Route path="/project" 
          component={() => { 
            window.location.href = 'https://www.google.com/'; 
            return null;
          }
        }/>
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
