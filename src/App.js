import React from 'react';
import './css/App.scss';
import Intro from './components/intro';
import Resume from './components/resume';
import Contact from './components/contact';
import Stats from './components/stats';

class App extends React.Component {
  render() {
    return (
      <div>
        <Intro />
        <Resume />
        <Stats />
        <Contact />
      </div>
    );
  }
}

export default App;
