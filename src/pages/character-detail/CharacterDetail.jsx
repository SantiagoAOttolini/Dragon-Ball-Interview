import './styles.css';
import CharacterCard from '../../components/character-card/CharacterCard';
import Search from '../../components/search/Search';
import useSearch from '../../hooks/useSearch';

function CharacterDetail({ likedCharacters, handleLike }) {
  const { searchTerm, setSearchTerm, filteredCharacters } = useSearch(likedCharacters);

  return (
    <div className="character-detail">
      <h1>FAVORITOS</h1>
      <Search searchTerm={searchTerm} handleSearch={setSearchTerm} />
      <div className="character-home__grid">
        {filteredCharacters.length === 0 ? (
          <p>No tienes personajes favoritos que coincidan.</p>
        ) : (
          filteredCharacters.map(({ id, name, image }) => (
            <CharacterCard
              key={id}
              name={name}
              image={image}
              characterData={{ id, name, image }}
              isLiked={true}
              handleLike={handleLike}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default CharacterDetail;