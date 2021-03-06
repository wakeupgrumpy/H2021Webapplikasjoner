import { SearchIcon } from '@heroicons/react/outline'

const Search = ({ searchQuerHandler }) => {
  const { setSearchQuery, doSearch } = searchQuerHandler

  const updateSearchQuery = (event) => setSearchQuery(event.target.value)

  const searchClick = (event) => {
    event.preventDefault()
    doSearch()
  }

  return (
    <form className="p-6 w-auto flex justify-end items-center text-grey space-x-5">
      <SearchIcon className="text-gray-400 hover:text-gray-500 h-7" />
      <input
        type="text"
        className="w-full input"
        placeholder="Search movies..."
        onChange={updateSearchQuery}
      />
      <button type="submit" onClick={searchClick} className="button">
        Search
      </button>
    </form>
  )
}

export default Search
