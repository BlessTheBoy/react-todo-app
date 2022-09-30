import React, {useState} from 'react';
import Popup from 'reactjs-popup';
import db from '../firebase'
import 'reactjs-popup/dist/index.css';
import './css/editPopUp.css'
import './css/popUp.css'
import BlessTheBoy2 from './BlessTheBoy2';

function EditPopUp(props) {
    let initialInput = props.todo.todo
    let initialDetails = props.todo.details
    const [input, setInput] = useState(props.todo.todo)
    const [details, setDetails] = useState(props.todo.details)

    const updateTodo = () => {
        db.collection('todos').doc(props.todo.id).set({
            todo: input,
            details: details
        }, { merge: true })
        initialInput = input
        initialDetails = details
    }
    
    const resetTodo = () => {
        setInput(initialInput)
        setDetails(initialDetails)
    }

    return (
        <Popup
            trigger={
                <div className="main-content" style={props.todo.completed ? {opacity: .4} : {opacity: 1}}>
                    <h4>{props.todo.todo.slice(0,30)}</h4>
                    <p><small>{props.todo.details.slice(0,60) + "..."}</small></p>
                </div>
            }
            modal
            onClose = {resetTodo}
        >
            {close => (
            <form className="modal">
                <button className="close"
                    type="button"
                    onClick={() =>{                    
                    resetTodo()
                    close()
                }}>
                &times;
                </button>
                <div className="header"> Edit Todo </div>
                <hr/>
                <div className="content">
                    {' '}
                    <div className="task-cont input-cont">
                        <label for="task">Task</label>
                        <input name="task" type="text" value = {input} onChange = {e => setInput(e.target.value)}/>
                    </div>
                    <div className="details-cont input-cont">
                        <label for="details">details</label>
                        <textarea name="details" value= {details} onChange = {e => setDetails(e.target.value)}/>
                    </div>
                    <div className="actions">
                    <button
                        className="cancel"
                        type = "button"
                        onClick={() =>{                    
                            resetTodo()
                            close()
                        }}
                    >
                        Cancel
                    </button>
                    <button
                        className="save"
                        type = "submit"
                        onClick={e => {
                            e.preventDefault()
                            updateTodo()
                            close()
                        }}
                    >
                        Save
                    </button>
                    </div>
                </div>
                <p><span>Designed and built by </span><BlessTheBoy2 /></p>
            </form>
            )}
        </Popup>
    )
}

export default EditPopUp
