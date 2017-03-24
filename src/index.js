import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Weather from './Weather';
import About from './About';
import $ from 'jquery'; 
import './index.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import {Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './NavBar';



ReactDOM.render(
    <Router>
        <div>
          <Route exact path="/" component={App}/>
          <Route path="/about" component={About}/>
        </div>
    </Router>,
    document.getElementById('root')
);
