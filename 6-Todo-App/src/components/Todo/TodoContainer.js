import { useTodos } from "../../context/TodoContext";

import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import TodoHeader from "./TodoHeader";

import Alert from "../shared/Alert";
import Button from "../shared/Button";
import useToggle from "../shared/useToggle";

const TodoContainer = () => {
  const [modal, toggleModal] = useToggle(false);
  const { pendingTodos, completedTodos } = useTodos();

  const isCompletedTodos = completedTodos.length > 0;
  const isPendingTodos = pendingTodos.length > 0;
  const isNoTodos = !isCompletedTodos && !isPendingTodos;

  return (
    <>
      {modal && <TodoForm toggleModal={toggleModal} />}
      {isNoTodos ? (
        <>
          <Alert type="success">
            Well done, everything is completed. Add a new task to get something
            elese done!
          </Alert>
          <Button name="Add new todo" clickHandler={toggleModal} />
        </>
      ) : (
        <section className="grid grid-cols-3 gap-10">
          <TodoHeader title="My todos" type="pending" />
          <Button name="Add new todo" clickHandler={toggleModal} />

          <TodoList todos={pendingTodos} />

          {isCompletedTodos && (
            <>
              <TodoHeader title="Completed Todos" type="completed" />
              <TodoList todos={completedTodos} />
            </>
          )}
        </section>
      )}
    </>
  );
};

export default TodoContainer;
