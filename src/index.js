import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/css/Navbar.css'
import App from './components/App';
import missionMars from './components/MissionMars/MissionMars';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import $ from 'jquery';
let headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');
$(document).ready(function(){
  
  //hides dropdown content
  $(".size_chart").hide();
  
  //unhides first option content
  $("#option1").show();
  
  //listen to dropdown for change
  $("#size_select").change(function(){
    //rehide content on change
    $('.size_chart').hide();
    //unhides current item
    $('#'+$(this).val()).show();
  });
  
});
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path="/">
        <App />
      </Route>
      <Route path="/missionMars">
        <missionMars />
      </Route>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
