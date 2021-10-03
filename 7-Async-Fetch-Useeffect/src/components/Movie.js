import {
  TagIcon,
  ExternalLinkIcon,
  CalendarIcon,
} from '@heroicons/react/outline'

import CardFooter from './MovieCard/CardFooter'
import Boxwrapper from './Shared/Boxwrapper'

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

  return (
    <article>
      <Boxwrapper>
        <div className="relative overflow-hidden">
          <img
            className="transition duration-500 ease-in-out inset-0 h-full w-full object-contain transform hover:scale-105"
            src={`${posterUrl}`}
            alt="Poster picture"
          />
        </div>
        <CardFooter fotterProps={footerProps} />
      </Boxwrapper>
    </article>
  )
}

export default Movie
