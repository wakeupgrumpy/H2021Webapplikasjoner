import Button from "./shared/Button";

const TodoForm = ({ addTodo, formData, setFormData, setModal }) => {
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
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <form
        className="grid grid-cols-2 gap-y-2 relative top-20 mx-auto p-20 border w-2/4 shadow-lg rounded-md bg-white"
        onSubmit={handleSubmit}
      >
        <span class="absolute inset-y-4 right-0 flex items-top mr-4">
          <svg
            class="w-7 h-7 fill-current"
            role="button"
            viewBox="0 0 20 20"
            onClick={() => setModal(false)}
          >
            <path
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
              fill-rule="evenodd"
            ></path>
          </svg>
        </span>
        <label htmlFor="title" className="row-start-1 font-bold g">
          Title
        </label>
        <input
          id="title"
          type="text"
          name="title"
          value={formData.title}
          onChange={updateValue}
          className="col-span-1 row-start-2 p-2 rounded-md border border-gray-500"
        />
        <label htmlFor="content" className="row-start-3 font-bold mt-4">
          Content
        </label>
        <textarea
          id="content"
          name="content"
          value={formData.content}
          onChange={updateValue}
          className="col-span-full row-start-4 p-2 rounded-md border border-gray-500 resize-none h-40"
        ></textarea>
        <Button
          name="Add todo"
          type="submit"
          styles="col-start-2 row-start-5 text-lg"
        />
      </form>
    </div>
  );
};

export default TodoForm;
