import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import Weather from './Weather';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//           <NavBar/>
//           <Weather/>
//
//       </div>
//     );
//   }
// }

var App = function App(props) {
    var instance = Object.create(Component.prototype);
    instance.render = function render() {
        return(
            <div className="App">
                <NavBar/>
                <Weather/>
            </div>
        );
    }
    return instance;
}

export default App;
