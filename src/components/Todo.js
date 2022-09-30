import React from "react";
import Check from "../assets/Check";
import CheckedCircle from "../assets/CheckedCircle";
import Circle from "../assets/Circle";
import EditPopUp from "./EditPopUp";
import Thrash from "../assets/Thrash";
import "./scss/todo.scss";



function Todo({ todo }) {
  const setTodoCompleted = (value) => {};
  const deleteTodo = () => {};

  return (
    <li>
      <div className="main">
        {todo.done ? (
          <div
            className="circle"
            onClick={() => setTodoCompleted(false)}
            style={{ cursor: "pointer" }}
          >
            <CheckedCircle />
          </div>
        ) : (
          <div
            className="circle"
            onClick={() => setTodoCompleted(true)}
            style={{ cursor: "pointer" }}
          >
            <Circle />
          </div>
        )}

        <EditPopUp todo={todo} />
      </div>
      <div className="controls">
        <div className="check" onClick={() => setTodoCompleted(true)}>
          {todo.completed ? null : <Check />}
        </div>
        <div onClick={deleteTodo}>
          <Thrash />
        </div>
      </div>
    </li>
  );
}

export default Todo;
