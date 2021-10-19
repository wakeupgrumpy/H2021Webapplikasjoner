import { useState } from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import Task from "./components/Task";

function App() {
  const [todos, setTodos] = useState([]);

  const todoHandler = (task) => {
    setTodos([...todos, task]);
  };

  return (
    <>
      <header>
        <h1>the todo list</h1>
      </header>
      <main>
        <AddTodo todoHandler={todoHandler} />
        {todos.length > 0 ? (
          <Todos>
            {todos.map((todo, id) => (
              <Task key={id} todo={todo} />
            ))}
          </Todos>
        ) : null}
      </main>
    </>
  );
}

export default App;
