import { useEffect } from 'react'
import { useApi } from '../hooks/useApi'
import Loading from './Shared/Loading'
import Alert from './Shared/Alert'

const MovieInfo = ({ movieID, toggleModal }) => {
  const { getMovieInfo, data, error, isLoading } = useApi()

  const {
    Title,
    // Year,
    Released,
    Plot,
    Country,
    // Director,
    Runtime,
    Language,
    // Actors,
  } = data || {}

  useEffect(() => getMovieInfo(movieID), [movieID, getMovieInfo])

  if (error) return <Alert type="danger">{error}</Alert>

  return isLoading ? (
    <Loading />
  ) : (
    <div className="flex flex-col space-y-4">
      <div>
        <h1 className="text-xl font-semibold">{Title}</h1>
        <p className="text-lg text-gray-500">Released: {Released}</p>
      </div>
      <p>{Plot}</p>

      <div className="flex place-content-between">
        <p>
          <span className="font-semibold">Country:</span> {Country}
        </p>
        <p>
          <span className="font-semibold">Runtime:</span> {Runtime}
        </p>
        <p>
          <span className="font-semibold">Language:</span> {Language}
        </p>
      </div>
      <button type="button" onClick={toggleModal} className="button">
        Close
      </button>
    </div>
  )
}

export default MovieInfo
