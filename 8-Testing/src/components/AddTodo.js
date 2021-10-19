import { useState } from "react";

const AddTodo = ({ todoHandler }) => {
  const [task, setTask] = useState("");
  const addTodoClick = (event) => {
    event.preventDefault();
    todoHandler(task);
    setTask("");
  };
  const inputHandler = (event) => setTask(event.target.value);
  const inputIsEmpty = task.length === 0;

  return (
    <form className="wrapper">
      <input
        type="text"
        placeholder="What todo?"
        value={task}
        onChange={inputHandler}
      />
      <button
        role="button"
        type="submit"
        onClick={addTodoClick}
        disabled={inputIsEmpty}
      >
        Add
      </button>
    </form>
  );
};
export default AddTodo;
