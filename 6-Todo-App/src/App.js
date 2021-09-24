import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import Layout from "./components/Layout";
import TodoContainer from "./components/TodoContainer";

function App() {
  return (
    <>
      <Navbar />
      <Layout>
        <TodoForm />
        <TodoContainer />
      </Layout>
    </>
  );
}

export default App;
