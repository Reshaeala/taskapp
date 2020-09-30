import React, {useState, useEffect} from "react";
import firebase from '../util/firebase';
import {Form, Button, Card } from "react-bootstrap";
import GoogleSignup from "../components/GoogleSignup";


export default function Logout({handleLogout}) {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);
    
   
    const authListener = () =>{
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                setUser(user);
            }else{
             setUser("");
            }
        });
        
    };
    useEffect(() => {
        authListener();
    })
	return (
		<div onclick={handleLogout}> 
          Logout
        </div>
	);
};

