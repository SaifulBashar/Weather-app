import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';

function About(props) {
    let link = "https://openweathermap.org/"
    return (
      <div >
          <NavBar/>
          <div className="text-center">
              <h1 className="about">All data come from <a href={link}>OpenWeatherApp</a></h1>
          </div>
      </div>
    );
}




export default About;
