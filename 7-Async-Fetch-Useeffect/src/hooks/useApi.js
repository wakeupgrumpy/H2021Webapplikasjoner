import { useCallback, useState } from 'react'

const API_URL = `https://www.omdbapi.com/?apikey=91d19b23`

export const useApi = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState()
  const [error, setError] = useState()

  const removeDuplicates = (movieList) =>
    movieList.filter(
      (v, i, a) => a.findIndex((t) => t.imdbID === v.imdbID) === i
    )

  const processResults = useCallback(
    (results, count) =>
      results ? removeDuplicates(results).slice(0, count) : null,
    []
  )

  const get = async (query) => {
    setIsLoading(true)
    try {
      const response = await fetch(query)
      const results = await response.json()
      setError()
      setIsLoading(false)
      return results
    } catch (error) {
      setData()
      setError(error.message)
      setIsLoading(false)
    }
  }

  const getMovies = useCallback(
    async (query, count) => {
      const { Search } = await get(`${API_URL}&type=movie&s=${query}`)
      setData(processResults(Search, count))
    },
    [processResults]
  )

  const getMovieInfo = useCallback(async (id) => {
    const movieInfo = await get(`${API_URL}&i=${id}`)
    setData(movieInfo)
  }, [])

  return { data, error, isLoading, getMovies, getMovieInfo }
}
