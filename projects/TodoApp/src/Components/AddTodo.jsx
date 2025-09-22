import "../App.css";
import { useState } from "react";

const AddTodo = ({ onNewItem }) => {
  const [todoName, setTodoName] = useState();
  const [todoDueDate, setDueDate] = useState();

  const handleNewName = () => {
    setTodoName(event.target.value);
  };
  const handleDueDate = () => {
    setDueDate(event.target.value);
  };

  const handleAddBtnClicked = () => {
    onNewItem(todoName, todoDueDate);
    setTodoName("");
    setDueDate("");
  };
  return (
    <div className="inputContainer">
      <div className="container text-center">
        <div className=" row row-cols-3 rowStyle">
          <div className="col-4">
            <input
              type="text"
              className="taskInputBox"
              placeholder="Enter the task"
              value={todoName}
              onChange={handleNewName}
            />
          </div>
          <div className="col-4">
            <input
              type="date"
              className="dateInput"
              value={todoDueDate}
              onChange={handleDueDate}
            />
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-success addBtn"
              onClick={handleAddBtnClicked}
            >
              Add Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddTodo;
