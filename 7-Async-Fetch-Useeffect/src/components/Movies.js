import Movie from './MovieCard/Movie'
import Boxwrapper from './Shared/Boxwrapper'

const Movies = ({ movies }) =>
  movies ? (
    <section className="grid md:grid-cols-3 sm:grid-cols-2 gap-14">
      {movies.map((movie, i) => (
        <Movie key={i} movieInfo={movie} />
      ))}
    </section>
  ) : (
    <Boxwrapper>
      <h2 className="p-6 text-xl">No results...</h2>
    </Boxwrapper>
  )

export default Movies
