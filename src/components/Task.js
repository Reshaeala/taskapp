import React from 'react';
import Button from '@material-ui/core/Button';
import firebase from '../util/firebase';

export default function Task({task}) {
    const deleteTask= () => {
        const taskRef = firebase.database().ref('Task').child(task.id);
        taskRef.remove();
    }
    const completeTask= () => {
        const taskRef = firebase.database().ref('Task').child(task.id);
        taskRef.update({
            complete: !task.complete, 
        });
    }
	return (
		<div>
			<h1 class={task.complete ? "complete": ""}>{task.title}</h1>
            <Button variant="contained" color="secondary" onClick={deleteTask}>Delete</Button>
            <Button variant="contained" className="completebtn" onClick={completeTask}>Complete</Button>
		</div>
	)
};
