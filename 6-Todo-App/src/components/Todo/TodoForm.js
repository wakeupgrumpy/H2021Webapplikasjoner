import Button from "../shared/Button";
import Modal from "../shared/Modal";

const TodoForm = ({ toggleModal, formHandler }) => {
  const {
    formData: { title, content },
    setFormData,
    addTodo,
  } = formHandler;

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo();
  };

  const updateValue = (event) => {
    setFormData((prev) => ({
      ...prev,
      ...{ [event.target.name]: event.target.value },
    }));
  };

  return (
    <Modal toggleModal={toggleModal}>
      <form className="grid grid-cols-2 gap-y-2" onSubmit={handleSubmit}>
        <label htmlFor="title" className="row-start-1 font-bold g">
          Title
        </label>
        <input
          id="title"
          type="text"
          name="title"
          value={title}
          onChange={updateValue}
          className="col-span-1 row-start-2 p-2 rounded-md border border-gray-500"
          required
        />
        <label htmlFor="content" className="row-start-3 font-bold mt-4">
          Content
        </label>
        <textarea
          id="content"
          name="content"
          value={content}
          onChange={updateValue}
          className="col-span-full row-start-4 p-2 rounded-md border border-gray-500 resize-none h-40"
          required
        ></textarea>
        <Button
          name="Add todo"
          styles="col-start-2 row-start-5 text-lg"
          submit
        />
      </form>
    </Modal>
  );
};

export default TodoForm;
