import React, {useState, useEffect} from 'react';
import './App.css';
import TodoList from './components/TodoList';
import db from './firebase'
import firebase from 'firebase'
import Number from './components/Number';
import Header from './components/Header';

function App() {
  const [input, setInput] = useState('')
  const [list, setList] = useState([])

  const addTodo = (e) => {
    e.preventDefault()
    // setList([...list, input])
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      completed: false,
      details: ""
    })

    setInput("")
  }

  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setList(snapshot.docs.map(doc => ({id: doc.id, todo : doc.data().todo, details: doc.data().details ,completed:doc.data().completed})))
    })
  }, [])

  return (
    <div className="App">
      <div>
        <Number todos={list}/>
        <Header />        
        <TodoList list={list}/>
        {/* <form>
          <input value={input} onChange={e => setInput(e.target.value)} />
          <button type="submit" onClick={addTodo} disabled={!input}>Add todo</button>
        </form> */}
      </div>
    </div>
  );
}

export default App;