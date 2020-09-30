import React from "react";
import {Form, Button, Card } from "react-bootstrap";
import GoogleSignup from "../components/GoogleSignup";


export default function SignUp(props) {
        const {email,
        setEmail,
        password,
        setPassword,
        handleSignIn,
        handleSignUp,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError} = props;

	return (
		<div > 
    <h1>Sign Up!</h1> 
    <Card body className="logform" > 
    
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <div className="signbtn">
            <Button variant="primary" type="submit">
                Sign Up
            </Button>
             <GoogleSignup/>
             </div>
            </Form>
            <p>Have an account?  <a href="/signin" >  Sign In</a></p>
		</Card>


      </div>
	)
}

