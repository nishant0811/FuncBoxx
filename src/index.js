import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import MissionMars from './components/missionMars/MissionMars';
import Login from './components/LoginAndSignup/Login';
import Signup from './components/LoginAndSignup/Signup';
import CodeEditor from './components/CodeEditor/CodeEditor';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import $ from 'jquery';
// let headers = new Headers();
// headers.append('Content-Type', 'application/json');
// headers.append('Accept', 'application/json');
// $(document).ready(function(){
  
//   //hides dropdown content
//   $(".size_chart").hide();
  
//   //unhides first option content
//   $("#option1").show();
  
//   //listen to dropdown for change
//   $("#size_select").change(function(){
//     //rehide content on change
//     $('.size_chart').hide();
//     //unhides current item
//     $('#'+$(this).val()).show();
//   });
  
// });
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path="/dyteapp">
        <App />
      </Route>
      <Route path="/MissionMars">
        <MissionMars />
      </Route>
      <Route path="/Login">
        <Login />
      </Route>
      <Route path="/Signup">
        <Signup />
      </Route>
      <Route path="/CodeEditor">
        <CodeEditor />
      </Route>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
