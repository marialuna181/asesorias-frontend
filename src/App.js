import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Asesorias</h1>
        </header>
        <p className="App-intro">
          Esta sera el app de asesorias 
          <ul>
            <li>Luna Tito Maria</li>
            <li>Paz Luz Clarita</li>
            <li>Larriega Raul</li>
          </ul>
        </p>
      </div>
    );
  }
}

export default App;
