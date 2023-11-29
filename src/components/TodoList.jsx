import React, { useState } from "react";
import CreateTaskPopup from "../modals/CreateTaskPopup";

const TodoList = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className="header text-center">
        <h3>Todo List</h3>
        <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>
          Create Task
        </button>
      </div>
      <div className="task-container">stuff</div>
      <CreateTaskPopup toggle={toggle} modal={modal} />s
    </>
  );
};

export default TodoList;
