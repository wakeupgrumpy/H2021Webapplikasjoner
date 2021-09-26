import React, { useState, useEffect } from "react";

import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import TodoHeader from "./TodoHeader";

import Alert from "../shared/Alert";
import Button from "../shared/Button";
import useToggle from "../shared/useToggle";

import mockDatabase from "../../db/database";

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

  // Clears new-todo-form
  const clearFormData = () => setFormData({ title: "", content: "" });

  // Add todo to pending todo-list
  const addTodo = () => {
    setPendingTodos([...pendingTodos, { id: Date.now(), ...formData }]);
    clearFormData();
    toggleModal();
  };

  // Mark a todo as completed
  const completeTodo = (id) => {
    // Copy pendingTodos
    const completed = pendingTodos;
    // Find index of todo to delete
    const i = completed.findIndex((todo) => todo.id === id);
    // Remove that todo from array, and change completed to true
    const todo = completed.splice(i, 1)[0];
    todo.completed = true;
    //Add to completed list
    setCompletedTodos([...completedTodos, todo]);
    // Update pending todods
    setPendingTodos(completed);
  };

  // Remove a todo from completed-list
  const removeTodo = (id) => {
    setCompletedTodos(completedTodos.filter((todo) => todo.id !== id));
  };

  const todoHandler = { completeTodo, removeTodo };

  // Display alert if todo-lists are
  const todoListAreEmpty = () =>
    pendingTodos.length === 0 && completedTodos.length === 0;
  // If there is no todos in either list. Display warning, and let user add a new todo.
  if (todoListAreEmpty()) {
    const message = {
      content: "No past, or current todos found. Add a new one to get started!",
      type: "danger",
    };

    return (
      <>
        {modal && (
          <TodoForm
            toggleModal={toggleModal}
            formHandler={{ formData, setFormData, addTodo }}
          />
        )}
        <Alert {...message} />
        <Button name="Add new todo" clickHandler={toggleModal} />
      </>
    );
  }

  return (
    <>
      {modal && (
        <TodoForm
          toggleModal={toggleModal}
          formHandler={{ formData, setFormData, addTodo }}
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
    </>
  );
};

export default TodoContainer;
