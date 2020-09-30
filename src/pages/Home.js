import React, {useState, useEffect} from "react";
import fire from '../util/firebase';
import SignIn from '../components/SignIn'
import { Card, Container} from "react-bootstrap";
import List from './List'

export default function Home() {

	return (
        <div>
        <SignIn/>
        </div>
    )
}
//  <Card className="text-center">
//         <Card.Header><h1>Welcome to Task List!</h1></Card.Header>
//         <Card.Body>
//             <Card.Title>Login or Sign Up Below!</Card.Title>
//             <Card.Link href="/signin">Sign In</Card.Link>
//             <Card.Link href="/signup">Sign Up</Card.Link>
            
//         </Card.Body>
        
//         </Card>