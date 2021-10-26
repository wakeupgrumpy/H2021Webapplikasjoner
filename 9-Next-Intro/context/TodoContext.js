import { createContext, useEffect } from 'react'

import useApi from '../hooks/useApi'

export const TodoContext = createContext()

export const TodoProvider = ({ children }) => {
  const { isLoading, data, get, error, post, remove, complete } = useApi()

  // Call api-get function on initialization
  useEffect(() => {
    get()
  }, [get])

  return (
    <TodoContext.Provider
      value={{ data, isLoading, get, post, error, remove, complete }}
    >
      {children}
    </TodoContext.Provider>
  )
}
