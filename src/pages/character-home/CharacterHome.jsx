import "./styles.css";
import useCharacters from "../../hooks/useCharacters";
import useSearch from "../../hooks/useSearch";
import Search from "../../components/search/Search";
import CharacterCard from "../../components/character-card/CharacterCard";
import Pagination from "../../components/pagination/Pagination";

function CharacterHome({ likedCharacters, handleLike }) {
  const { characters, loading, page, totalPages, nextPage, prevPage } =
    useCharacters(1, 10);
  const { searchTerm, setSearchTerm, filteredCharacters } =
    useSearch(characters);
    
  if (loading) return <p className="loading">Cargando personajes...</p>;

  return (
    <div className="character-home">
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
      {filteredCharacters.length ? (
        <Pagination
          page={page}
          totalPages={totalPages}
          onNext={nextPage}
          onPrev={prevPage}
        />
      ) : null}
    </div>
  );
}

export default CharacterHome;
