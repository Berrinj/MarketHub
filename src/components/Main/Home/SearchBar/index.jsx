import { useEffect, useState } from "react";
import { StyledSearchBar } from "./SearchBar.styles";
import { Link } from "react-router-dom";

/**
 * @param {*} products
 * @param {*} onSearch
 * @description This component is responsible for rendering the search input and results in a dropdown 
 * @returns the SearchBar component with the search input and results
 */

function SearchBar({ products, onSearch }) {
    const [searchInput, setSearchInput] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        if (searchInput.length > 0) {
            const filterResults = products.filter((product) =>
                product.title.toLowerCase().includes(searchInput.toLowerCase())
            );
            setSearchResults(filterResults)
        } else {
            setSearchResults([])
        }
    } , [searchInput, products])

    const handleSearchInput = (e) => {
        setSearchInput(e.target.value);
        onSearch(e.target.value);
    }

    const handleSearch = () => {
        onSearch(searchInput);
        setSearchInput("");
        setSearchResults([]);
    }


  return (
    <StyledSearchBar>
    <div className="search-bar">
      <input 
      type="search" 
      name="search-input" 
      id="search-input" 
      placeholder="Search products.." 
      value={searchInput}
      onChange={handleSearchInput}
      autoComplete="off"
       />
      <button onClick={handleSearch} disabled={searchResults.length === 0}>Search</button>
      {searchInput && (
        <ul className="search-results">
          <p>Search results:</p>  
          {searchResults.length > 0 ? (
            <>  
              {searchResults.map((result) => (
                <li key={result.id}>
                  <Link to={`/product/${result.id}`}>
                    <img src={result.image.url} alt={result.image.alt} />
                    {result.title}
                  </Link>
                </li>
              ))}
            </>
          ) : (
            <span className="no-results">No matching items</span>
          )}
        </ul>
      )}
    </div>
    </StyledSearchBar>
  );
}

export default SearchBar;