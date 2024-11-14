function SearchBar() {
  return (
    <div className="search-bar">
      <input type="search" name="search-input" id="search-input" placeholder="Search products" />
      <button>Search</button>
    </div>
  );
}

export default SearchBar;