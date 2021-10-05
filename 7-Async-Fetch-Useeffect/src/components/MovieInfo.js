import { CogIcon } from '@heroicons/react/outline'

import { useState, useEffect } from 'react'

const MovieInfo = ({ movieID, toggleModal }) => {
  const [movieInfo, setMovieInfo] = useState('')
  const [movieDoneLoding, setMovieDoneLoading] = useState(false)

  const {
    Title,
    Year,
    Released,
    Plot,
    Country,
    Director,
    Runtime,
    Language,
    Actors,
  } = movieInfo || {}

  console.log(movieInfo)

  const getMovieInfo = async (id) => {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=91d19b23&i=${id}`
    )
    const results = await response.json()
    return results
  }

  useEffect(() => {
    getMovieInfo(movieID).then((results) => {
      setMovieInfo(results)
      setMovieDoneLoading(true)
    })
  }, [movieID])

  return movieDoneLoding ? (
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
      <button
        type="button"
        onClick={toggleModal}
        className="py-3 text-white rounded-lg bg-yellow-500 hover:bg-yellow-400"
      >
        Close
      </button>
    </div>
  ) : (
    <div className="flex flex-col space-y-4 items-center">
      <CogIcon className="animate-bounce h-10" />
      <p className="font-semibold text-xl">Loading...</p>
    </div>
  )
}

export default MovieInfo
