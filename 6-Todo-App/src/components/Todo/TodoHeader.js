const TodoHeader = (props) => {
  const { title, type } = props;
  const ROLE = {
    pending: "col-span-2 text-2xl",
    completed: "col-span-full text-xl",
  };
  return <h2 className={`${ROLE[type]} font-extrabold`}>{title}</h2>;
};

export default TodoHeader;
