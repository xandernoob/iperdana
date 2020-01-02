import React from 'react';
import Header from './components/Navigation/Header/Header';
import Spinner from './components/UI/Spinner/Spinner';

import ProjectShowcase from './containers/ProjectShowcase/ProjectShowcase';

import './App.scss';

const App = () => {
  return (
    <div>
      <div>
        <Header />
        <ProjectShowcase />
      </div>

      <div>
        <h2>This is working</h2>
      </div>
    </div>
    
  );
}

export default App;
