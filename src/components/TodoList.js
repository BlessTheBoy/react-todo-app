import React from 'react'
import Todo from './Todo'
import './scss/todoList.scss'

function TodoList(props) {
    return (
        <ul>
            {props.list.map(todo => <Todo key={todo.id} todo={todo} ></Todo>)}
        </ul>
    )
}

export default TodoList