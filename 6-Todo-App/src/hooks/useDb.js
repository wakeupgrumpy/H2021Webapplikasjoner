import { useCallback, useState } from "react";

import mockDatabase from "../db/database.json";

const useApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();

  const get = useCallback(() => {
    setIsLoading(true);
    const [pending, completed] = mockDatabase.todos.reduce(
      ([pending, completed], e) =>
        e.completed
          ? [pending, [...completed, e]]
          : [[...pending, e], completed],
      [[], []]
    );
    setTimeout(() => {
      setData({ pendingTodos: [...pending], completedTodos: [...completed] });
      setIsLoading(false);
    }, 2000);
  }, []);

  return { isLoading, data, get };
};

export default useApi;
