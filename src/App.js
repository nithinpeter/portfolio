import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h3>NITHIN PETER</h3>
        </div>
        <div className="App-intro">
          Front-end engineer. I work somewhere between the designers and the database!
        </div>
        <div className="Connect-container">
          <div className="Connect-content">
            <h5>@nithinpeter</h5>
            <a href="https://twitter.com/nithinpeter" target="_blank">
              <span className="fa fa-twitter"></span>
            </a>
            <a href="https://github.com/nithinpeter" target="_blank">
              <span className="fa fa-github"></span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
