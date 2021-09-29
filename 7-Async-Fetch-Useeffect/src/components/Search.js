import { SearchIcon } from '@heroicons/react/outline'

const Search = () => (
  <section className="justify-self-end text-right">
    <div className="relative">
      <div className="">
        <SearchIcon className="text-gray-400 z-15 hover:text-gray-500 absolute h-5 top-5 left-3" />
      </div>
      <input
        type="text"
        className="h-14 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none"
        placeholder="Search movies..."
      />
      <div className="absolute top-2 right-2">
        <button
          type="button"
          className="h-10 w-20 text-white rounded-lg bg-yellow-500 hover:bg-yellow-600"
        >
          Search
        </button>
      </div>
    </div>
  </section>
)

export default Search
