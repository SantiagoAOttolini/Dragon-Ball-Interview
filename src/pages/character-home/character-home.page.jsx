//Vendors
import React from "react";
//Styles
import "./character-home.styles.css";
//Hooks
import useCharacters from "../../hooks/useCharacters.hook";
import useSearch from "../../hooks/useSearch.hook";
//Components
import Search from "../../components/search/search.component";
import CharacterCard from "../../components/character-card/character-card.component";
import Pagination from "../../components/pagination/pagination.component";

function CharacterHome({ likedCharacters, handleLike, showFavorites }) {
  const { characters, loading, page, totalPages, nextPage, prevPage } =
    useCharacters(1, 50);

  const sourceCharacters = showFavorites ? likedCharacters : characters;
  const { searchTerm, setSearchTerm, filteredCharacters } =
    useSearch(sourceCharacters);

  if (loading) return <p className="loading">🔄 Cargando personajes...</p>;

  return (
    <div className="character-home">
      {showFavorites && <h1>FAVORITOS</h1>}
      <Search
        searchTerm={searchTerm}
        handleSearch={setSearchTerm}
        resultsCount={filteredCharacters.length}
      />
      <div className="character-home__grid">
        {filteredCharacters.map(({ id, name, image }) => {
          const isLiked = likedCharacters.some(
            (character) => character.id === id
          );
          return (
            <CharacterCard
              key={id}
              name={name}
              image={image}
              characterData={{ id, name, image }}
              handleLike={handleLike}
              isLiked={isLiked}
            />
          );
        })}
      </div>
      {filteredCharacters.length > 0 && !showFavorites && (
        <Pagination
          page={page}
          totalPages={totalPages}
          onNext={nextPage}
          onPrev={prevPage}
        />
      )}
    </div>
  );
}

export default CharacterHome;
