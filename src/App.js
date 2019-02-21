import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Router from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar branding='Lyric Finder'></Navbar>
        </header>
      </div>
    );
  }
}

export default App;
