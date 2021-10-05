import {
  TagIcon,
  ExternalLinkIcon,
  CalendarIcon,
  ExclamationIcon,
} from '@heroicons/react/outline'
import { useState } from 'react'

import CardFooter from './CardFooter'
import MovieInfo from '../MovieInfo'
import Boxwrapper from '../Shared/Boxwrapper'
import Modal from '../Shared/Modal'

import useToggle from '../Shared/useToggle'

const Movie = ({ movieInfo }) => {
  const { Title, Year, imdbID, Type, Poster: posterUrl } = movieInfo

  const footerProps = {
    year: {
      color: 'blue',
      content: Year,
      Icon: CalendarIcon,
    },
    type: {
      color: 'green',
      content: Type,
      Icon: TagIcon,
    },
    imdb: {
      color: 'yellow',
      content: 'IMDb',
      link: `https://www.imdb.com/title/${imdbID}`,
      Icon: ExternalLinkIcon,
    },
  }

  const [modal, toggleModal] = useToggle(false)
  const [imageFound, setImageFound] = useState(true)

  const noImageFound = () => setImageFound(false)

  return (
    <>
      <button type="button" onClick={toggleModal}>
        <Boxwrapper>
          <div className="relative overflow-hidden">
            {imageFound ? (
              <img
                onError={noImageFound}
                className="transition duration-500 ease-in-out inset-0 h-full w-full object-contain transform hover:scale-105"
                src={`${posterUrl}`}
                alt="Movie poster"
              />
            ) : (
              <ExclamationIcon className="bg-gray-100 text-gray-300 hover:text-gray-400" />
            )}
          </div>
          <h2 className="text-xl text-center py-3 mx-3 border-b-2 font-semibold">
            {Title}
          </h2>
          <CardFooter fotterProps={footerProps} />
        </Boxwrapper>
      </button>
      {modal && (
        <Modal toggleModal={toggleModal}>
          <MovieInfo movieID={imdbID} toggleModal={toggleModal} />
        </Modal>
      )}
    </>
  )
}

export default Movie
