import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from 'react-bootstrap';
import $ from 'jquery';
import MessageBox from './MessageBox';
import cloud from '../public/package.png';
// class Weather extends Component {
//     constructor(props){
//         super(props);
//         this.state={
//             location:"Dhaka",
//             temp:0,
//         }
//         this.onWeatherSubmit = this.onWeatherSubmit.bind(this);
//     }
//     onWeatherSubmit(e){
//         e.preventDefault();
//         let newlocation = document.getElementById('cityName').value;
//         this.setState({
//             location: newlocation
//         });
//         //http://api.openweathermap.org/data/2.5/weather?q=Dhaka&appid=1f03c3f9c7ad7847a4b2b6417894c10d
//         $.ajax({
//               url: `http://api.openweathermap.org/data/2.5/weather?q=${newlocation}&appid=1f03c3f9c7ad7847a4b2b6417894c10d`,
//               dataType: 'json',
//               cache: false,
//               success: function(data) {
//                   let temp =  data.main.temp - 273;
//                   this.setState({temp:temp.toFixed(2) }); // Notice this
//               }.bind(this),
//               error: function(xhr, status, err) {
//                 alert("Something wrong");
//               }.bind(this)
//         });
//
//     }
//     render() {
//
//         let button =null;
//         if(this.state.temp > 0 || this.state.temp <0){
//             button = <MessageBox location={this.state.location} temp={this.state.temp}/>
//         }
//         return (
//           <div className="Weather text-center">
//
//               <form onSubmit = {this.onWeatherSubmit}>
//
//                   <img src = {cloud} className="rotate90"/>
//                   <h6 style={{color:"blue"}}>Enter City name</h6>
//                   <h1>
//                       <input type="text" id="cityName" />
//                   </h1>
//                   <Button type="submit" className="btn-lg btn-primary">Get Weather</Button>
//                   {button}
//
//               </form>
//
//           </div>
//       );
//   }
// }

var Weather =function Weather(props) {
    var instance = Object.create(Component.prototype);
    instance.state ={
        location:"Dhaka",
        temp:0
    }


    instance.onWeatherSubmit=function onWeatherSubmit(e) {

        e.preventDefault();
        let newlocation = document.getElementById('cityName').value;

        instance.setState({
            location: newlocation
        });
        //http://api.openweathermap.org/data/2.5/weather?q=Dhaka&appid=1f03c3f9c7ad7847a4b2b6417894c10d


        $.ajax({
            url: `http://api.openweathermap.org/data/2.5/weather?q=${newlocation}&appid=1f03c3f9c7ad7847a4b2b6417894c10d`,
            dataType: 'json',
            cache: false,
            success: function(data) {
                let temp =  data.main.temp - 273;
                instance.setState({temp:temp.toFixed(2) });

            },
            error: function(xhr, status, err) {
                alert("Something wrong");
            }
        });
    }


    instance.render=function render() {
        let button =null;
        if(instance.state.temp > 0 || instance.state.temp <0){
            button = <MessageBox location={instance.state.location} temp={instance.state.temp}/>
        }
        return (
            <div className="Weather text-center">

                <form onSubmit = {instance.onWeatherSubmit}>

                    <img src = {cloud} className="rotate90"/>
                    <h6 style={{color:"blue"}}>Enter City name</h6>
                    <h1>
                        <input type="text" id="cityName" />
                    </h1>
                    <Button type="submit" className="btn-lg btn-primary">Get Weather</Button>
                    {button}

                </form>

            </div>
        );
    }
    return instance;
}

export default Weather;
