import TodoCard from "./TodoCard";

const TodoList = ({ todos, todoHandler }) =>
  todos.map((todo) => (
    <TodoCard key={todo.id} todoObject={todo} todoHandler={todoHandler} />
  ));

export default TodoList;
