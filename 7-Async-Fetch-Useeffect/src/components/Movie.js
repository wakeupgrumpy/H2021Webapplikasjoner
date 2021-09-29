import {
  TagIcon,
  ExternalLinkIcon,
  CalendarIcon,
} from '@heroicons/react/outline'
import Boxwrapper from './Shared/Boxwrapper'

const Movie = ({ movieInfo }) => {
  console.log(movieInfo)
  const { Title, Year, imdbID, Type, Poster } = movieInfo

  return (
    <article>
      <Boxwrapper>
        <div className="relative overflow-hidden">
          <img
            className="transition duration-500 ease-in-out inset-0 h-full w-full object-contain transform hover:scale-105"
            src={`${Poster}`}
            alt=""
          />
        </div>
        <div className="p-4">
          <h2 className="font-bold text-center">{Title}</h2>
        </div>
        <div className="p-4 border-t text-gray-700 flex place-content-evenly">
          <div>
            <CalendarIcon className="h-4 inline-block mr-2" />
            <span className="px-4 py-1 leading-none bg-blue-200 rounded-full font-semibold uppercase tracking-wide text-xs">
              {Year}
            </span>
          </div>
          <div>
            <TagIcon className="h-4 inline-block mr-2" />
            <span className="px-4 py-1 leading-none bg-green-200 rounded-full font-semibold uppercase tracking-wide text-xs">
              {Type}
            </span>
          </div>
          <div>
            <ExternalLinkIcon className="h-4 inline-block mr-2" />
            <a
              href={`https://www.imdb.com/title/${imdbID}/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="inline-block px-3 py-1 leading-none bg-yellow-300 hover:bg-yellow-400 text-black rounded-full font-bold uppercase tracking-wide text-xs">
                imdb
              </span>
            </a>
          </div>
        </div>
      </Boxwrapper>
    </article>
  )
}

export default Movie
