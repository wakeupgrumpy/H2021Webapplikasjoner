import { useState } from "react";
import { useTodoDispatch } from "../../context/TodoContext";
import Button from "../shared/Button";
import Modal from "../shared/Modal";

const TodoForm = ({ toggleModal }) => {
  const dispatch = useTodoDispatch();
  const [formData, setFormData] = useState({ title: "", content: "" });

  const { title, content } = formData;

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: "ADD_TODO", todo: { title, content, id: Date.now() } });
    toggleModal();
  };

  const updateValue = (event) => {
    setFormData((prev) => ({
      ...prev,
      ...{ [event.target.name]: event.target.value },
    }));
  };

  return (
    <Modal toggleModal={toggleModal}>
      <form className="col" onSubmit={handleSubmit}>
        <label htmlFor="title" className="header">
          Title
        </label>
        <input
          id="title"
          type="text"
          name="title"
          value={title}
          onChange={updateValue}
          className="input"
          required
        />
        <label htmlFor="content" className="header">
          Content
        </label>
        <textarea
          id="content"
          name="content"
          value={content}
          onChange={updateValue}
          className="input resize-none h-40"
          required
        ></textarea>
        <Button name="Add todo" submit />
      </form>
    </Modal>
  );
};

export default TodoForm;
