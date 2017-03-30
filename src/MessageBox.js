import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';

// function MessageBox(props){
//     return (
//         <div className="message">
//             <h1 style={{'font-style':'italic'}}>It is it {props.temp}° Celsius in {props.location} </h1>
//         </div>
//     );
// }
var MessageBox =function (props) {
    console.log(props);
    var el = Object.create(Component.prototype);
    el.props = props;
    el.render=function render() {
        return(
            <div className="message">
                <h1 style={{'font-style':'italic'}}>It is it {el.props.temp}° Celsius in {el.props.location} </h1>
            </div>
        );
    }
    return el;
};
export default MessageBox;
