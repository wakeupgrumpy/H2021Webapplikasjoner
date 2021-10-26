import { useCallback, useState } from 'react'

import axios from 'axios'

const useApi = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState()
  const [error, setError] = useState()

  const get = useCallback(async () => {
    setIsLoading(true)
    try {
      const response = await axios.get('/api/todos')
      const { data: todos, success } = response.data

      if (success) setData(todos)
      setError()
    } catch (err) {
      setError(err.response.data.error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const post = useCallback(async (task) => {
    setIsLoading(true)
    try {
      const response = await axios.post('/api/todos', { task })
      const { data: todo, success } = response.data

      if (success) setData(todo)
      setError()
    } catch (err) {
      setError(err.response.data.error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const remove = useCallback(
    async (id) => {
      setIsLoading(true)
      try {
        await axios.delete(`/api/todos/${id}`)
        get()
      } catch (err) {
        setError(err)
      } finally {
        setIsLoading(false)
      }
    },
    [get]
  )

  const complete = useCallback(
    async (id) => {
      setIsLoading(true)
      try {
        await axios.put(`/api/todos/${id}`)
        get()
      } catch (err) {
        setError(err)
      } finally {
        setIsLoading(false)
      }
    },
    [get]
  )

  return { isLoading, data, get, error, post, remove, complete }
}

export default useApi
