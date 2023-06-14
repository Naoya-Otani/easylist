const SearchBar = () => {
  return (
    <div className="lg:bg-bgSearchbar lg:bg-cover lg:aspect-[5/1] py-6 lg:py-24 rounded-sm">
      <div className="flex items-center justify-center ">
        <div className="relative items-center">
          <input
            type="text"
            placeholder="授業名・先生名など…"
            className="px-4 py-2 lg:w-[400px] w-full rounded border-yellow-500 focus:outline-none focus:border-yellow-300 border-2 focus:ring-0 font-notoSans placeholder:font-notoSans"
          />
          <button className="absolute right-0 top-0 bottom-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-2 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
