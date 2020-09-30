import React from "react";
import GoogleLogin from 'react-google-login';


export default function GoogleSignup() {
      const responseGoogle = (response) => {
  console.log(response);
}
	return (
		<div>
         <GoogleLogin
    clientId="362411408273-jb3ltl9ds6ol8rn01a9ir14tbjjsqs4a.apps.googleusercontent.com"
    buttonText="Gmail Signup"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
  
		</div>
	);
}
