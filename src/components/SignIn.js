import React, {useState, useEffect} from "react";
import GoogleSignin from "../components/GoogleSignin";
import GoogleSignup from '../components/GoogleSignup'
import { Form, Button, Card } from "react-bootstrap";
import List from '../pages/List';

import fire from '../util/firebase';

export default function SignIn() {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);
  
  const clearInputs = () => {
        setEmail('');
        setPassword('');
    }
     const clearErrors = () =>{
        setEmailError('');
        setPasswordError('')
    }

    const handleSignUp = () => {
      clearErrors();
    fire
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch((err) => {
        switch(err.code){
        case "auth/email-already-in-use":
        case "auth/invaild-email": 
            setEmailError(err.message);
            break;
        case "auth/weak-password":
            setPasswordError(err.massage);
            break
        }
        });
  };
   const handleLogout = () => {
        fire.auth().signOut();
    };

    const handleSignIn = () => {
    clearErrors();
    fire
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch((err) => {
        switch(err.code){
        case "auth/invaild-email": 
        case "auth/user-disabled":
        case "auth/user-not-found":
            setEmailError(err.message);
            break;
        case "auth/wrong-password":
            setPasswordError(err.massage);
            break
        }
        });
  };
  const authListener = () =>{
        fire.auth().onAuthStateChanged((user) => {
            if(user){
                clearInputs();
                setUser(user);
            }else{
             setUser("");
            }
        });
        
    };
    useEffect(() => {
        authListener();
    }, []);

	return (
    <div > 
     <h1>Sign In!</h1> 
      {user ? (
        <List handleLogout={handleLogout}/>
        ):(
        <SignIn
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleSignIn={handleSignIn}
        handleSignUp={handleSignUp}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        emailError={emailError}
        passwordError={passwordError}
        /> 
        )}
    <Card body className="logform" > 
    
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text 
                className="text-muted" 
                autoFocus 
                required
                value={email}
                onChange= {(e) => setEmail(e.target.value)}
                >
                We'll never share your email with anyone else.
                </Form.Text>
                <p className="errorMsg">{emailError}</p>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                <Form.Text 
                className="text-muted" 
                autoFocus 
                required
                value={password}
                onChange= {(e) => setPassword(e.target.value)}
                />
                <p className="errorMsg">{passwordError}</p>
            </Form.Group>
            

           <div className="signbtn">
           <Button variant="primary" type="submit">
                Sign In
            </Button>
             <GoogleSignin/>
            
            </div>
            <p>Don't have an account?  <a href="/signup"> Sign up</a></p>
            </Form>

		</Card>
      </div>
	)
}
