import React from "react";
import "./styles.css";

function Search({ searchTerm, handleSearch, resultsCount }) {
  return (
    <div className="search-container">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="🔍 Buscar personaje por nombre..."
        className="search-input"
      />
      {resultsCount !== 0 && (
        <p className="search-results">{resultsCount} RESULTS</p>
      )}
    </div>
  );
}

export default Search;
