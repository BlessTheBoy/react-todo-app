import React, {useState} from 'react';
import Popup from 'reactjs-popup';
import db from '../firebase'
import 'reactjs-popup/dist/index.css';
import firebase from 'firebase'
import AddButton from './AddButton';
import './css/addPopUp.css'
import './css/popUp.css'
import BlessTheBoy2 from './BlessTheBoy2';

function AddPopUp() {
    const [input, setInput] = useState('')
    const [details, setDetails] = useState('')

    const addTodo = () => {
        // setList([...list, input])
        db.collection('todos').add({
          todo: input,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          completed: false,
          details: details
        })
    
        resetTodo()
      }
    
    const resetTodo = () => {
        setInput("")
        setDetails("")
    }

    return (
        <Popup
            trigger={
                <div className="add-cont">
                    <AddButton className="add-button"/>
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
                   close()
                }}>
                &times;
                </button>
                <div className="header"> Add Todo </div>
                <hr/>
                <div className="content">
                    {' '}
                    <div className="task-cont input-cont">
                        <label for="task">Task</label>
                        <input name="task" type="text" value = {input} onChange = {e => setInput(e.target.value)} placeholder="Enter new todo"/>
                    </div>
                    <div className="details-cont input-cont">
                        <label for="details">details</label>
                        <textarea name="details" value= {details} onChange = {e => setDetails(e.target.value)} placeholder="Enter todo details"/>
                    </div>
                    <div className="actions">
                    <button
                        className="cancel"
                        type="button"
                        onClick={() =>{ 
                            resetTodo()
                            close()
                        }}
                    >
                        Cancel
                    </button>
                    <button
                        className="save"
                        type="submit"
                        onClick={e => {
                            e.preventDefault()
                            addTodo()
                            close()
                        }}
                    >
                        Add Todo
                    </button>
                    </div>
                </div>
                <p><span>Designed and built by </span><BlessTheBoy2 /></p>
            </form>
            )}
        </Popup>
    )
}

export default AddPopUp
