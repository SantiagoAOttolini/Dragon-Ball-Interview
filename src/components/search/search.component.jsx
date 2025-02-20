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
        placeholder="BUSCA UN PERSONAJE"
        className="search-input"
      />
      {resultsCount !== 0 && (
        <p className="search-results">
          {resultsCount} {resultsCount === 1 ? "RESULTADO" : "RESULTADOS"}
        </p>
      )}
    </div>
  );
}

export default Search;
