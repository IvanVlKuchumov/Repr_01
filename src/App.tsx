import React from 'react';
import './App.css';
import {PropsTask, Todolist} from "./Todolist";

const task1: Array<PropsTask> = [
    {id: 1, title: "HTML and CSS", isDone: true},
    {id: 2, title: "Javascript", isDone: false},
    {id: 3, title: "React", isDone: false}
]
const task2: Array<PropsTask>= [
    {id: 1, title: "Terminator", isDone: true},
    {id: 2, title: "Teremok", isDone: false},
    {id: 3, title: "American Pie", isDone: true}
]

function App() {
    return (
        <div className="App">
            <Todolist title="What to learn?" tasks={task1}/>
            <Todolist title="Movies" tasks={task2}/>
        </div>
    );
}

export default App;
