import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import Weather from './Weather';
class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar/>
          <Weather/>

      </div>
    );
  }
}

export default App;
