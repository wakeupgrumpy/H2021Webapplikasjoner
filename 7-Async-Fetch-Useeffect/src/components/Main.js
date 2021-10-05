import { useEffect, useState } from 'react'
import Movies from './Movies'
import Search from './Search'
import Boxwrapper from './Shared/Boxwrapper'

const Main = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [movies, setMovies] = useState([])

  const defaultQuery = 'Star Wars'

  const getMovies = async (query) => {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=91d19b23&s=${query}&type=movie`
    )
    const results = await response.json()
    return results?.Search
  }

  useEffect(() => {
    getMovies(defaultQuery).then((results) => setMovies(results.slice(0, 5)))
  }, [])

  const removeDuplicates = (movieList) =>
    movieList.filter(
      (v, i, a) => a.findIndex((t) => t.imdbID === v.imdbID) === i
    )

  const doSearch = () =>
    getMovies(searchQuery).then((results) => {
      setMovies(results ? removeDuplicates(results) : null)
    })

  return (
    <main className="w-3/5 mx-auto my-12 flex flex-col space-y-10">
      <Boxwrapper>
        <Search searchQuerHandler={{ setSearchQuery, doSearch }} />
      </Boxwrapper>
      <Movies movies={movies} />
    </main>
  )
}

export default Main
