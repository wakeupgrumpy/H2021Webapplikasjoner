import Search from './Search'

const Navbar = () => (
  <header className="py-4 shadow-lg sticky top-0 z-10 bg-yellow-100">
    <div className="w-3/5 m-auto grid grid-cols-2">
      <h1 className="font-sans text-3xl font-semibold text-gray-600 hover:text-gray-800 my-auto">
        Move Database
      </h1>
      <Search />
    </div>
  </header>
)

export default Navbar
