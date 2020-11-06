import React from 'react'
import db from '../firebase'
import Check from './Check'
import CheckedCircle from './CheckedCircle'
import Circle from './Circle'
import EditPopUp from './EditPopUp'
import Thrash from './Thrash'
function Todo(props) {
    return (
        <li>
            {props.todo.completed ? <CheckedCircle /> : <Circle />}
            <div>
                <EditPopUp todo = {props.todo} />
                <div>
                    {props.todo.completed ? null : 
                    <div>
                        <Check />
                    </div> }
                    <div onClick={event => {db.collection('todos').doc(props.todo.id).delete()}}>
                        <Thrash />
                    </div>                    
                </div>
            </div>
        </li>
    )
}

export default Todo