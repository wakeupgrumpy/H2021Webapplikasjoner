import { useContext } from 'react'

import Link from 'next/link'

import { TodoContext } from '../context/TodoContext'

const Home = () => {
  const { data } = useContext(TodoContext)

  return (
    <>
      <header>👋 welcome to the todo list</header>
      <main>
        <section className="wrapper text-center">
          There are currently <strong>{data?.length}</strong> tasks to do, lets
          get started{' '}
          <Link href="/todo">
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </Link>
        </section>
      </main>
    </>
  )
}

export default Home
