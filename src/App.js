import React, { Component } from 'react';
import './App.scss';
import Photograph from './components/Photograph';
import Myself from './components/Myself';
import Aboutme from './components/Aboutme';
import Education from './components/Education';

class App extends Component {
  render() {
    return <div className="app" style = {{marginTop:135+'px'}}>
        <Photograph/>
        <Myself/>
        <Aboutme/>
        <Education/>
    </div>;
  }
}

export default App;
