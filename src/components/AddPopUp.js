import React, { useState } from "react";
import AddButton from "../assets/AddButton";
import "./scss/addPopUp.scss";
import "./scss/popUp.scss";
import BlessTheBoy2 from "../assets/BlessTheBoy2";
// import useModal from "../utils/hooks";

function AddPopUp() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTodo = () => {
    resetTodo();
  };

  const resetTodo = () => {
    setTitle("");
    setDescription("");
  };

  //   const { CustomModal, revealModal, closeModal } = useModal();

  return (
    <div className="add-cont">
      <AddButton
        className="add-button"
        onClick={() => {
          // revealModal
        }}
      />
      {/* <CustomModal>
        <form className="modal">
          <button
            className="close"
            type="button"
            onClick={() => {
              closeModal();
            }}
          >
            &times;
          </button>
          <div className="header"> Add Todo </div>
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
                placeholder="Enter new todo"
              />
            </div>
            <div className="details-cont input-cont">
              <label for="details">details</label>
              <textarea
                name="details"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter todo details"
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
                  addTodo();
                  closeModal();
                }}
              >
                Add Todo
              </button>
            </div>
          </div>
          <p>
            <span>Designed and built by </span>
            <BlessTheBoy2 />
          </p>
        </form>
      </CustomModal> */}
    </div>
  );
}

export default AddPopUp;
