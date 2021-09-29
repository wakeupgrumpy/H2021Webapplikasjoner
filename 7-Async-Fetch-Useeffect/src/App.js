import Layout from './components/Layout'
import Movies from './components/Movies'
import Navbar from './components/Navbar'
import Main from './components/Main'

const App = () => (
  <Layout>
    <Navbar />
    <Main>
      <Movies />
    </Main>
  </Layout>
)

export default App
