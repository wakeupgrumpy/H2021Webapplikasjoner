const TodoHeader = (props) => {
  const { title, type } = props;
  const ROLE = {
    pending: "col-span-2 text-2xl font-extrabold",
    completed: "col-span-full text-xl font-extrabold",
    card: "text-lg font-bold line-clamp-1",
  };
  return <h2 className={`${ROLE[type]}`}>{title}</h2>;
};

export default TodoHeader;
