import { useEffect } from "react";
import useDb from "./hooks/useDb";

import { TodoProvider } from "./context/TodoContext";

import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import TodoContainer from "./components/Todo/TodoContainer";
import Alert from "./components/shared/Alert";

function App() {
  const { isLoading, get, data } = useDb();

  useEffect(() => {
    get();
  }, [get]);

  return (
    <>
      <Navbar />
      <Layout>
        {isLoading || !data ? (
          <Alert type="warning">Henter todos...</Alert>
        ) : (
          <TodoProvider value={data}>
            <TodoContainer />
          </TodoProvider>
        )}
      </Layout>
    </>
  );
}

export default App;
