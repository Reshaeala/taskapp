import React from "react";
import firebase from '../util/firebase';

import Button from '@material-ui/core/Button';

class SignIn extends React.Component {


  SignIn() {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((u) => {
        console.log('Successfully Logged In');
      })
      .catch((err) => {
        console.log('Error: ' + err.toString());
      })
  }
    render(){
	return (
		<div style={{ textAlign: 'center' }}>
        <div>
          <div>Email</div>
          <input id="email" placeholder="Enter Email.." type="text"/>
        </div>
        <div>
          <div>Password</div>
          <input id="password" placeholder="Enter Password.." type="text"/>
        </div>
        <Button onClick={this.SignIn}>Log In</Button>
      </div>
	)
    }
}

export default SignIn;