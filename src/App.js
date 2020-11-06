import React, {useState, useEffect} from 'react';
import './App.css';
import TodoList from './components/TodoList';
import db from './firebase'
import Number from './components/Number';
import Header from './components/Header';
import AddPopUp from './components/AddPopUp';

function App() {
  const [list, setList] = useState([])

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
        <AddPopUp />
        {/* <form>
          <input value={input} onChange={e => setInput(e.target.value)} />
          <button type="submit" onClick={addTodo} disabled={!input}>Add todo</button>
        </form> */}
      </div>
    </div>
  );
}

export default App;