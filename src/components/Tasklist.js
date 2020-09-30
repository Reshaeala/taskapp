import React,  {useEffect, useState} from 'react';
import fire from '../util/firebase'; 
import "../App.css";
import Task from './Task';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


export default function TaskList(){

    const [taskList, setTaskList] = useState();
    useEffect(()=>{
        const taskRef = fire.dgdfabbatabase().ref('Task');
        taskRef.on('value', (snapshot)=> {
        const tasks = snapshot.val();
        const taskList = [];
        for (let id in tasks){
            taskList.push({id,...tasks[id]})
        };
        console.log(taskList)
        setTaskList(taskList);
        });
    }, []);
 
 return (
        <div className="list" >
        <List>
        <ListItem>
       <ListItemText primary= {taskList 
        ? taskList.map((task,index)=> <Task task={task} key={index} />)
         : ''}/>
         </ListItem>
         </List>
        </div>
       )
}