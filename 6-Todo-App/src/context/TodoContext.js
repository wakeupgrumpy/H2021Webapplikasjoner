import React, { createContext, useContext, useReducer } from "react";

const reducer = (state, { type, id, todo }) => {
  switch (type) {
    case "ADD_TODO":
      return {
        ...state,
        pendingTodos: [...state.pendingTodos, todo],
      };
    case "COMPLETE_TODO":
      const fromState = {
        ...state.pendingTodos.find((obj) => obj.id === id),
        completed: true,
      };

      return {
        completedTodos: [...state.completedTodos, fromState],
        pendingTodos: [...state.pendingTodos.filter((todo) => todo.id !== id)],
      };
    case "REMOVE_TODO":
      return {
        ...state,
        completedTodos: [
          ...state.completedTodos.filter((todo) => todo.id !== id),
        ],
      };
    default:
      return state;
  }
};

const TodoContext = createContext({});
const TodoContextDispatch = createContext(() => {});

export const TodoProvider = ({ children, value }) => {
  const [state, dispatch] = useReducer(reducer, value);

  return (
    <TodoContextDispatch.Provider value={dispatch}>
      <TodoContext.Provider value={state}>{children}</TodoContext.Provider>
    </TodoContextDispatch.Provider>
  );
};

export const useTodos = () => useContext(TodoContext);
export const useTodoDispatch = () => useContext(TodoContextDispatch);
