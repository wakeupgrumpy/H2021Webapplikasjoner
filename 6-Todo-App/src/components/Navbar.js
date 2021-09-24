const Navbar = () => {
  return (
    <nav className="grid py-4 grid-cols-5 shadow-lg sticky top-0 z-1 bg-white">
      <h1 className="col-start-2 w- text-3xl font-extrabold">Todo</h1>
      <p className="col-start-4 w-full place-self-center text-right text-gray-700 font-semibold text-lg">
        User user
      </p>
    </nav>
  );
};

export default Navbar;
