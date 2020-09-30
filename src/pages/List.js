 import React from "react";
 import Forms from '../components/Forms';
import Tasklist from '../components/Tasklist';
import {Button} from "react-bootstrap";

export default function List({handleLogout}) {
	return (
		<div >
        <nav><Button onClick={handleLogout}>Logout</Button></nav>
         <Forms/>
        <Tasklist />
        
		</div>
	);
}

