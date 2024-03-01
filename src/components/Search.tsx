function Search() {
  return (
    <div className="sticky top-0 z-10 flex justify-center">
      <div className=" flex w-full items-center justify-between gap-2 rounded-md bg-yellow-300 p-3 lg:w-[900px]">
        <input type="text" className="h-10 w-full rounded-md p-2" />
        <input type="text" className="h-10 w-full rounded-md p-2" />
        <input type="text" className="h-10 w-full rounded-md p-2" />

        <button className="rounded-md bg-blue-600 p-2 text-white">
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;
