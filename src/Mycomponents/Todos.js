import React from 'react'
import {Todoitem} from './Todoitem'
export const Todos = (props) => {
    return (
        <div className='container'>
            <h2 className='my-3'>Todos list</h2>
            {props.todos.length===0?"No todos to display!":
            props.todos.map((element)=>{
                return <Todoitem todo={element} key={element.sno}  onDelete = {props.onDelete}/> 
            })}
        </div>
    )
}
