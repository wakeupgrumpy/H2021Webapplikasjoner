import { useContext, useEffect } from 'react'

import Link from 'next/link'

import AddTodo from '../components/AddTodo'
import Task from '../components/Task'
import TodoList from '../components/TodoList'
import { TodoContext } from '../context/TodoContext'

const Todo = () => {
  const { data, isLoading, error, remove, complete } = useContext(TodoContext)

  // Set cursor to wait if we load data
  useEffect(() => {
    if (isLoading === true) document.body.classList.add('wait')
    if (isLoading === false) document.body.classList.remove('wait')
  }, [isLoading])

  // If an error occures print message to console
  useEffect(() => {
    if (error) console.error('ERROR: ', error)
  }, [error])

  return (
    <>
      <header>the todo list</header>
      <main>
        <AddTodo />
        <section className="wrapper">
          {data?.length > 0 ? (
            <TodoList>
              {data?.map((todo, id) => (
                <Task key={id} todo={todo} actions={{ remove, complete }} />
              ))}
            </TodoList>
          ) : (
            'Nothing to do! Add a new task above'
          )}
        </section>
      </main>
      <footer className="text-white font-semibold mt-3 text-center">
        <Link href="/">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline-block ml-2 hover:scale-125"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>{' '}
            Go back
          </a>
        </Link>
      </footer>
    </>
  )
}

export default Todo
