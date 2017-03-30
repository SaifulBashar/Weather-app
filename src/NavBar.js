import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
//-------------------------------------------------------------------------------------
// class NavBar extends Component {
//   render() {
//     return (
//         <Nav className="navbar navbar-default">
//           <div className="container-fluid">
//             <div className="navbar-header">
//               <a className="navbar-brand" href="#" style={{color:'red'}}>WEATHER</a>
//             </div>
//             <ul className="nav navbar-nav">
//               <li><Link to="/">Get weather</Link></li>
//               <li><Link to="/about">About</Link></li>
//             </ul>
//           </div>
//       </Nav>
//     );
//   }
// }
///Traditional way of doing react 
var NavBar = function (props) {
    var instance = Object.create(Component.prototype);
    instance.render = function () {
        return(
            <Nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#" style={{color:'red'}}>WEATHER</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li><Link to="/">Get weather</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </div>
            </Nav>
        );
    }
    return instance;
}

export default NavBar;
