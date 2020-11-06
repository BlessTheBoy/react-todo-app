import React, {useState, useEffect} from 'react';
import Popup from 'reactjs-popup';
import db from '../firebase'
import 'reactjs-popup/dist/index.css';

function EditPopUp(props) {
    const initialInput = props.todo.todo
    const initialDetails = props.todo.details
    const [input, setInput] = useState(props.todo.todo)
    const [details, setDetails] = useState(props.todo.details)

    const updateTodo = () => {
        db.collection('todos').doc(props.todo.id).set({
            todo: input,
            details: details
        }, { merge: true })
    }
    
    const resetTodo = () => {
        setInput(initialInput)
        setDetails(initialDetails)
    }

    return (
        <Popup
            trigger={
                <div>
                    <h4>{props.todo.todo}</h4>
                    <p><small>{props.todo.details.slice(0,50) + "..."}</small></p>
                </div>
            }
            modal
            onClose = {resetTodo}
        >
            {close => (
            <div className="modal">
                <button className="close" onClick={() =>{                    
                    resetTodo()
                }}>
                &times;
                </button>
                <div className="header"> Edit Todo </div>
                <form className="content">
                    {' '}
                    <input type="text" value = {input} onChange = {e => setInput(e.target.value)}/>
                    <textarea value= {details} onChange = {e => setDetails(e.target.value)}/>
                    <div className="actions">
                    <button
                        className="button"
                        onClick={() =>{                    
                            resetTodo()
                            close()
                        }}
                    >
                        Cancel
                    </button>
                    <button
                        className="button"
                        onClick={() => {
                            updateTodo()
                            close()
                        }}
                    >
                        Save
                    </button>
                    </div>
                </form>
            </div>
            )}
        </Popup>
    )
}

export default EditPopUp
