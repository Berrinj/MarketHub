import { StyledSearchBar } from "./SearchBar.styles";

function SearchBar() {
  return (
    <StyledSearchBar>
      <input type="search" name="search-input" id="search-input" placeholder="Search products" />
      <button>Search</button>
    </StyledSearchBar>
  );
}

export default SearchBar;