const TodoForm = () => {
  return (
    <form class="grid grid-cols-2 gap-y-2">
      <lable htmlFor="title" class="row-start-1 font-bold g">
        Title
      </lable>
      <input
        id="title"
        type="text"
        name="title"
        class="col-span-1 row-start-2 p-2 rounded-md border border-gray-500"
      />
      <lable htmlFor="content" class="row-start-3 font-bold mt-4">
        Content
      </lable>
      <textarea
        id="content"
        name="content"
        class="col-span-full row-start-4 p-2 rounded-md border border-gray-500 resize-none h-40"
      ></textarea>
      <button class="col-start-2 row-start-5 justify-self-end mt-3 py-2 px-6 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none">
        Add todo
      </button>
    </form>
  );
};

export default TodoForm;
