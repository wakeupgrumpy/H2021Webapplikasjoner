import { SearchIcon } from '@heroicons/react/outline'

const Search = () => (
  <section className="justify-self-end text-right relative">
    <SearchIcon className="text-gray-400 z-15 hover:text-gray-500 absolute h-5 top-5 left-3" />
    <input
      type="text"
      className="h-14 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none"
      placeholder="Search movies..."
    />
    <button
      type="button"
      className="absolute top-2 right-2 h-10 w-20 text-white rounded-lg bg-yellow-500 hover:bg-yellow-600"
    >
      Search
    </button>
  </section>
)

export default Search
