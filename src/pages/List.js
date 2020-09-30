import React from "react";
import Forms from '../components/Forms';
import Tasklist from '../components/Tasklist';
import {Button} from "react-bootstrap";
import NavBar from '../components/NavBar';

export default function List() {
	return (
		<div >
        <NavBar/>
        <Forms/>
        <Tasklist />
        
		</div>
	);
}

