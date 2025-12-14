import { useDashboard } from "../context/DashboardContext";

const SearchBar = () => {
  const { search, setSearch } = useDashboard();

  return (
    <input
      className="search"
      placeholder="Search widgets..."
      value={search}
      onChange={e => setSearch(e.target.value)}
    />
  );
};

export default SearchBar;
