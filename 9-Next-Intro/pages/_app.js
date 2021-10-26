import '../styles/global.css'

import { TodoProvider } from '../context/TodoContext'

const TodoApp = ({ Component, pageProps }) => (
  <TodoProvider>
    <Component {...pageProps} />
  </TodoProvider>
)

export default TodoApp
