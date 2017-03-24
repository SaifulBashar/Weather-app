import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';

function MessageBox(props){
    return (
      <div className="message">
          <h1 style={{'font-style':'italic'}}>It is it {props.temp}° Celsius in {props.location} </h1>
      </div>
    );
}

export default MessageBox;
