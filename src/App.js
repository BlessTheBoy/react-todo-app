import React, { useState, useEffect } from "react";
import "./components/scss/main.scss";
import TodoList from "./components/TodoList";
import Number from "./components/Number";
import Header from "./components/Header";
import AddPopUp from "./components/AddPopUp";

function App() {
  const [list, setList] = useState([]);

  const fetchTodos = async () => {
    // const data = await fetch("https://localhost:5000/todos");
    // const todos = await data.json();
    // console.log("todos", todos);
    setList([
      {
        id: "589c97bd-cf4b-4b0e-aef5-bb33b28e6c05",
        title: "Hello world",
        description:
          "This is the first todo added from the thunder client while testing the api database connection.",
        done: false,
        created_at: "2022-09-29T22:36:11.957Z",
        updated_at: "2022-09-29T22:36:11.957Z",
      },
      {
        id: "204066b6-b831-49d2-a9e8-544d3c650b66",
        title: "It worked!",
        description: "This is an updated description again",
        done: false,
        created_at: "2022-09-29T22:38:08.409Z",
        updated_at: "2022-09-29T22:58:52.366Z",
      },
    ]);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <Number className="number" todos={list} />
        <Header />
        <TodoList list={list} />
        <AddPopUp />
      </div>
    </div>
  );
}

export default App;
