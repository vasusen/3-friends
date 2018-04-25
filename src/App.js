import React, { Component } from 'react';
import Header from './components/common/Header';
import Friends from './components/friends/Friends';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        
        <Friends />
      </div>
    );
  }
}

export default App;
