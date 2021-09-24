import Button from "./shared/Button";

const TodoCard = ({ todoObject, todoHandler }) => {
  return (
    <article
      id={todoObject.id}
      className={`grid grid-cols-1 gap-y-2 p-6 rounded-lg shadow-blue ${
        todoObject.completed && "text-gray-400"
      }`}
    >
      <h3 className="text-lg font-bold line-clamp-1">{todoObject.title}</h3>
      <p className="line-clamp-2">{todoObject.content}</p>
      <Button
        name={todoObject.completed ? "Delete" : "Complete"}
        clickHandler={() =>
          todoObject.completed
            ? todoHandler.REMOVE(todoObject.id)
            : todoHandler.COMPLETE(todoObject.id)
        }
      />
    </article>
  );
};

export default TodoCard;
