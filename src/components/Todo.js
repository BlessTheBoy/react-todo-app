import React from 'react'
import db from '../firebase'
import Check from './Check'
import CheckedCircle from './CheckedCircle'
import Circle from './Circle'
import EditPopUp from './EditPopUp'
import Thrash from './Thrash'
import './css/todo.css'
function Todo(props) {
    return (
        <li>            
            <div className="main">
                <div className="circle">{props.todo.completed ? <CheckedCircle /> : <Circle />}</div>
                <EditPopUp todo = {props.todo} />                
            </div>
            <div className="controls">
                <div className="check" onClick={() => {db.collection('todos').doc(props.todo.id).set({
                    completed: true
                }, { merge: true })}}>
                    {props.todo.completed ? null : <Check />}
                </div>
                <div onClick={() => {db.collection('todos').doc(props.todo.id).delete()}} >
                    <Thrash />
                </div>                    
            </div>
        </li>
    )
}

export default Todo