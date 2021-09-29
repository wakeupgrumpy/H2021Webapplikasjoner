import { useEffect, useState } from 'react'
import Movie from './Movie'

const Movies = () => {
  const [movies, setMovies] = useState([])

  const getMovies = async () => {
    const response = await fetch(
      'https://www.omdbapi.com/?i=tt3896198&apikey=91d19b23&s=star%20wars'
    )
    const data = await response.json()
    setMovies(data?.Search)
  }

  console.log(movies)

  useEffect(() => {
    getMovies()
  }, [])

  // https://www.omdbapi.com/?i=tt3896198&apikey=91d19b23&s=star%20wars

  return (
    <section className="grid md:grid-cols-3 sm:grid-cols-2 gap-10">
      {movies?.length > 0 && movies.map((movie) => <Movie movieInfo={movie} />)}
    </section>
  )
}

export default Movies
