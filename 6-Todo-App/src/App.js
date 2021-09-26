import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import TodoContainer from "./components/Todo/TodoContainer";
import Footer from "./components/Footer";

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
