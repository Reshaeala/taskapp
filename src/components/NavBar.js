import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import Logout from './Logout';
import SignIn from './SignIn';

export default function NavBar({handleLogout}) {
	return (
		<div >
            <Navbar bg="dark" variant="dark">
    
                <Nav className="mr-auto">
                    <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                
                </Nav>
   
            </Navbar>
		</div>
	);
}