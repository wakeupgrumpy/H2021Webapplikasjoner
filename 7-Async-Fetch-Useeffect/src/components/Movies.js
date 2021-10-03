import { useEffect, useState } from 'react'
import Movie from './MovieCard/Movie'

const Movies = () => {
  const [movies, setMovies] = useState([])

  // https://www.omdbapi.com/?i=tt3896198&apikey=91d19b23&s=star%20wars
  const defaultQuery = 'Star Wars'

  const getMovies = async (query) => {
    const response = await fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=91d19b23&s=${query}&type=movie`
    )
    const results = await response.json()
    return results?.Search
  }

  useEffect(() => {
    getMovies(defaultQuery).then((results) => setMovies(results.slice(0, 5)))
  }, [])

  return (
    <section className="grid md:grid-cols-3 sm:grid-cols-2 gap-10">
      {movies?.length > 0 ? (
        movies.map((movie) => <Movie key={movie.imdbID} movieInfo={movie} />)
      ) : (
        <h2>No results</h2>
      )}
    </section>
  )
}

export default Movies
