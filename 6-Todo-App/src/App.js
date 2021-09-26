import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import TodoContainer from "./components/Todo/TodoContainer";

function App() {
  return (
    <div className="flex flex-col min-h-screen text-gray-700">
      <Navbar />
      <Layout>
        <TodoContainer />
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
