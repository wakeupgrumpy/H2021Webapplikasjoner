const TodoContainer = () => {
  return (
    <section class="grid grid-cols-3 gap-2">
      <h2 class="col-span-full text-2xl font-extrabold">My Todos</h2>

      <article class="grid grid-cols-1 gap-y-2 p-6 shadow-blue">
        <h3 class="text-lg font-bold">Todotitle</h3>
        <p class="line-clamp-2">
          Normally, both your asses would be dead as fucking fried chicken, but
          you happen to pull this shit while I'm in a transitional period so I
          don't wanna kill you, I wanna help you. But I can't give you this
          case, it don't belong to me. Besides, I've already been through too
          much shit this morning over this case to hand it over to your dumb
          ass.
        </p>
        <button class="justify-self-end text-sm mt-3 py-2 px-6 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none">
          Complete
        </button>
      </article>
    </section>
  );
};

export default TodoContainer;
