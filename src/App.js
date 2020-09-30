import React, {useState, useEffect} from "react";
import 'materialize-css';
import 'bootstrap/dist/css/bootstrap.min.css';


import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Home from "./pages/Home";
import NavBar from './components/NavBar';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import List from './pages/List';



function App() {

 

  
 return(
    <div>
    
        <NavBar/>
           
        <Router>
        <Switch>
        	<Route exact path="/" component={Home} />
            <Route exact path="/signup" component={SignUp} />
        </Switch>
        </Router>
        
       

    </div>

        );

}

export default App;
