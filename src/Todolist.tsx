import React from "react";
export type PropsTask = {
    id: number
    title: string
    isDone: boolean
}

type PropsTodolist = {
    title: string
    tasks: Array<PropsTask>
}

export const Todolist: React.FC<PropsTodolist> = (props) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <input/>
            <button>+</button>
            <ul>
                <li><input type="checkbox" checked={props.tasks[0].isDone}/><span>{props.tasks[0].title}</span></li>
                <li><input type="checkbox" checked={props.tasks[1].isDone}/><span>{props.tasks[1].title}</span></li>
                <li><input type="checkbox" checked={props.tasks[2].isDone}/><span>{props.tasks[2].title}</span></li>
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Complete</button>
            </div>
        </div>
    )
}