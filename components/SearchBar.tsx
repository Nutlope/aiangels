export default function SearchBar({ search, setSearch }) {
  return (
    <div className="relative mt-5">
      <SearchIcon
        className="h-5 w-5 absolute z-20 left-3 bottom-2 feather feather-search"
        aria-hidden="true"
      />
      <input
        type="text"
        id="search"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-xl shadow-sm inline-flex relative items-center border border-gray-300 px-4 py-2 text-sm text-gray-700 placeholder:text-gray-400 focus:z-10 focus:outline-none focus:ring-gray-500 md:w-72 pl-10 xs:pl-12"
        placeholder="Search by name"
      />
    </div>
  );
}

function SearchIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="gray"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  );
}
