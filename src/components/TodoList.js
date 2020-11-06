import React from 'react'
import Todo from './Todo'
import './css/todoList.css'

function TodoList(props) {
    return (
        <ul>
            {props.list.map(todo => <Todo key={todo.id} todo={todo} ></Todo>)}
        </ul>
    )
}

export default TodoList