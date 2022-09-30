import React, { useRef, useState } from "react";
import "./scss/editPopUp.scss";
import "./scss/popUp.scss";
import BlessTheBoy2 from "../assets/BlessTheBoy2";
// import useModal from "../utils/hooks";

function EditPopUp({ todo }) {
  const initialTitle = useRef(todo.title);
  let initialDescription = useRef(todo.description);
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  //   const { CustomModal, revealModal, closeModal } = useModal();

  const updateTodo = () => {};

  const resetTodo = () => {
    setTitle(initialTitle);
    setDescription(initialDescription);
  };

  return (
    <>
      <div
        className="main-content"
        style={todo.done ? { opacity: 0.4 } : { opacity: 1 }}
        onClick={() => {
          // revealModal
        }}
      >
        <h4>{todo.title.slice(0, 30)}</h4>
        <p>
          <small>{todo.description.slice(0, 60) + "..."}</small>
        </p>
      </div>
      {/* <CustomModal>
        <form className="modal">
          <button
            className="close"
            type="button"
            onClick={() => {
              resetTodo();
              closeModal();
            }}
          >
            &times;
          </button>
          <div className="header"> Edit Todo </div>
          <hr />
          <div className="content">
            {" "}
            <div className="task-cont input-cont">
              <label for="task">Task</label>
              <input
                name="task"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="details-cont input-cont">
              <label for="details">details</label>
              <textarea
                name="details"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="actions">
              <button
                className="cancel"
                type="button"
                onClick={() => {
                  resetTodo();
                  closeModal();
                }}
              >
                Cancel
              </button>
              <button
                className="save"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  updateTodo();
                  closeModal();
                }}
              >
                Save
              </button>
            </div>
          </div>
          <p>
            <span>Designed and built by </span>
            <BlessTheBoy2 />
          </p>
        </form>
      </CustomModal> */}
    </>
  );
}

export default EditPopUp;
