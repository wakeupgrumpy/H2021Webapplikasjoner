import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import TodoContainer from "./components/Todo/TodoContainer";

function App() {
  return (
    <>
      <Navbar />
      <Layout>
        <TodoContainer />
      </Layout>
      <Footer />
    </>
  );
}

export default App;
