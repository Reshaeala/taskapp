<<<<<<< HEAD
import React from "react";
import "./App.css";
// import Forms from './components/Forms'

function App() {
	return (
		<div>
			<h1>Todo</h1>
			{/* <input type="text" /> */}
		</div>
	);
=======
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
           
        <Router>
        <Switch>
        	<Route exact path="/" component={Home} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/list" component={List} />
        </Switch>
        </Router>
        
       

    </div>

        );

>>>>>>> 7b2abb5fb7259c79088f3e4812c5e765df637253
}

export default App;
