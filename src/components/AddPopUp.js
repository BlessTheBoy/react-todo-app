import React, {useState} from 'react';
import Popup from 'reactjs-popup';
import db from '../firebase'
import 'reactjs-popup/dist/index.css';
import firebase from 'firebase'
import AddButton from './AddButton';

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
                <div>
                    <AddButton />
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
                <div className="content">
                    {' '}
                    <input type="text" value = {input} onChange = {e => setInput(e.target.value)} placeholder="Enter new todo"/>
                    <textarea value= {details} onChange = {e => setDetails(e.target.value)} placeholder="Enter todo details"/>
                    <div className="actions">
                    <button
                        className="button"
                        type="button"
                        onClick={() =>{ 
                            resetTodo()
                            close()
                        }}
                    >
                        Cancel
                    </button>
                    <button
                        className="button"
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
            </form>
            )}
        </Popup>
    )
}

export default AddPopUp
