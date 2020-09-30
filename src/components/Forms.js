<<<<<<< HEAD
import React from "react";

export default function Forms() {
	return (
		<div>
			<input type="text" />
		</div>
	);
=======
import React, {useState} from 'react';
import firebase from '../util/firebase';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import "../App.css";

export default function Forms() {

    const [title,setTitle] = useState('');
    const handleOnChange = (e) =>{
        setTitle(e.target.value);
    };
    const createTask = () => { 
        const taskRef = firebase.database().ref('Task');
        const task = {
            title,
            complete: false,
        };

        taskRef.push(task);
    };
    return (
        <div className='form'>
            <form type='text' onChange={handleOnChange} value={title}><TextField id="outlined-basic" label="Task" variant="outlined" /></form>
            <Button variant="contained" color="primary" onClick={createTask}>Add To List</Button>
        </div>
    )
>>>>>>> 7b2abb5fb7259c79088f3e4812c5e765df637253
}
