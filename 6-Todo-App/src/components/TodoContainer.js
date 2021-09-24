import React, { useState, useEffect } from "react";
import mockDatabase from "../db/database";
import TodoList from "./TodoList";
import Alert from "./shared/Alert";
import TodoForm from "./TodoForm";
import Button from "./shared/Button";

const TodoContainer = () => {
  const [loadTrigger, setLoadTrigger] = useState(false);
  const [modal, setModal] = useState(false);

  const [pendingTodos, setPendingTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  // Oppdaterer todo-listene med dummy data fra json.
  // Lastet når siden oppdateres eller ved trigger.
  useEffect(() => {
    const [pending, completed] = mockDatabase.todos.reduce(
      ([pending, completed], e) =>
        e.completed
          ? [pending, [...completed, e]]
          : [[...pending, e], completed],
      [[], []]
    );
    setPendingTodos(pending);
    setCompletedTodos(completed);
  }, [loadTrigger]);

  // Check if there is any todos in the database, if not display alert
  if (pendingTodos.length === 0 && completedTodos.length === 0) {
    //if (true)
    return (
      <Alert
        content="No past, or current todos found. Add a new one to get started!"
        type="red"
      />
    );
  }

  // 🛑 REFACTOR THIS !! 🐴💩
  const todoHandler = {
    // CLICK funksjon når en todo er ferdig
    COMPLETE: (id) => {
      // Copy pendingTodos
      const completed = pendingTodos;
      // Find index of todo to delete
      const i = completed.findIndex((todo) => todo.id === id);
      // Remove that todo from array, and change completed to true
      const todo = completed.splice(i, 1)[0];
      todo.completed = true;
      //And add to completed list
      setCompletedTodos([...completedTodos, todo]);
      // Update pending todods
      setPendingTodos(completed);
      //setLoadTrigger(!loadTrigger);
      //alert(`Merker ${id} som ferdig`);
    },
    REMOVE: (id) => {
      setCompletedTodos(completedTodos.filter((todo) => todo.id !== id));
    },
  };

  const addTodo = () => {
    setPendingTodos([...pendingTodos, { id: Date.now(), ...formData }]);
    setModal(!modal);
  };

  return (
    <div>
      {modal && (
        <TodoForm
          addTodo={addTodo}
          formData={formData}
          setFormData={setFormData}
          setModal={setModal}
        />
      )}

      <section className="grid grid-cols-3 gap-10">
        <h2
          className={`${
            !modal ? "col-span-2" : "col-span-full"
          } text-2xl font-extrabold`}
        >
          My Todos
        </h2>
        {!modal && (
          <Button name="Add new todo" clickHandler={() => setModal(!modal)} />
        )}

        <TodoList todos={pendingTodos} todoHandler={todoHandler} />

        {completedTodos.length > 0 && (
          <>
            <h3 className="col-span-full text-xl font-extrabold">
              Completed Todos
            </h3>
            <TodoList todos={completedTodos} todoHandler={todoHandler} />
          </>
        )}
      </section>
    </div>
  );
};

export default TodoContainer;
