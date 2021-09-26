import React, { useState, useEffect } from "react";

import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

import Alert from "../shared/Alert";
import Button from "../shared/Button";
import useToggle from "../shared/useToggle";

import mockDatabase from "../../db/database";
import TodoHeader from "./TodoHeader";

const TodoContainer = () => {
  const [loadTrigger, setLoadTrigger] = useState(false);
  const [modal, toggleModal] = useToggle(false);

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

  // Display alert if todo-lists are
  const todoListAreEmpty = () =>
    pendingTodos.length === 0 && completedTodos.length === 0;

  if (todoListAreEmpty()) {
    const message = {
      content: "No past, or current todos found. Add a new one to get started!",
      type: "danger",
    };

    return <Alert {...message} />;
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
    // setModal(!modal);
    toggleModal();
  };

  return (
    <div>
      {modal && (
        <TodoForm
          addTodo={addTodo}
          formData={formData}
          setFormData={setFormData}
          setModal={toggleModal}
        />
      )}

      <section className="grid grid-cols-3 gap-10">
        <TodoHeader title="My todos" type="pending" />
        <Button name="Add new todo" clickHandler={toggleModal} />

        <TodoList todos={pendingTodos} todoHandler={todoHandler} />

        {completedTodos.length > 0 && (
          <>
            <TodoHeader title="Completed Todos" type="completed" />
            <TodoList todos={completedTodos} todoHandler={todoHandler} />
          </>
        )}
      </section>
    </div>
  );
};

export default TodoContainer;
