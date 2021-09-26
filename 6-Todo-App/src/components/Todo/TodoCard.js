import TodoHeader from "./TodoHeader";

import Button from "../shared/Button";
import Modal from "../shared/Modal";
import useToggle from "../shared/useToggle";

const TodoCard = ({ todoObject, todoHandler }) => {
  const [modal, toggleModal] = useToggle(false);
  const { id, completed, title, content } = todoObject;
  const { removeTodo, completeTodo } = todoHandler;
  const clickHandler = () => (completed ? removeTodo(id) : completeTodo(id));
  return (
    <>
      <article
        id={id}
        className={`grid grid-cols-1 gap-y-2 p-6 rounded-lg shadow-blue ${
          completed && "text-gray-400"
        }`}
      >
        <span onClick={toggleModal} className="cursor-pointer">
          <TodoHeader title={title} type="card" />
          <p className="line-clamp-2">{content}</p>
        </span>
        <Button
          name={completed ? "Delete" : "Complete"}
          clickHandler={clickHandler}
        />
      </article>
      {modal && (
        <Modal toggleModal={toggleModal}>
          <TodoHeader title={title} type="card" />
          <p>{content}</p>
          <Button
            name={completed ? "Delete" : "Complete"}
            clickHandler={clickHandler}
          />
        </Modal>
      )}
    </>
  );
};

export default TodoCard;
