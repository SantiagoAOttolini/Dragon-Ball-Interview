//Vendors
import React from "react";
//Styles
import "./search.styles.css";

function Search({ searchTerm, handleSearch, resultsCount }) {
  return (
    <div className="search-container">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="SEARCH A CHARACTER"
        className="search-input"
      />
      {resultsCount !== 0 && (
        <p className="search-results">{resultsCount} RESULTS</p>
      )}
    </div>
  );
}

export default Search;
