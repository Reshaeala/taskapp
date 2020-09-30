import React from "react";
import 'materialize-css';
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactDOM from 'react-dom';


import Button from '@material-ui/core/Button';

import Home from "./pages/Home";
import NavBar from './components/NavBar';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

import GoogleLogin from 'react-google-login';


function App() {
    const responseGoogle = (response) => {
  console.log(response);
}
 return(
    <div>
    <GoogleLogin
    clientId="362411408273-jb3ltl9ds6ol8rn01a9ir14tbjjsqs4a.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
  

            </div>

        );

}

export default App;
