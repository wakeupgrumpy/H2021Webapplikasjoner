import { useState } from "react";

const Task = ({ todo }) => {
  const [done, setDone] = useState(false);
  const taskDone = () => setDone(true);
  return (
    <li className={done ? "done" : null} onClick={taskDone}>
      {todo}
    </li>
  );
};

export default Task;
