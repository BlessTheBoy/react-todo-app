import React, {useState, useEffect} from 'react';
import './components/css/main.css'
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
      <div className="container">
        <Number className="number" todos={list}/>
        <Header />        
        <TodoList list={list}/>
        <AddPopUp />
      </div>
    </div>
  );
}

export default App;