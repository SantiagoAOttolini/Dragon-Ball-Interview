import './styles.css';

function CharacterCard({ name, image, characterData, handleLike, isLiked }) {
  return (
    <div className="character-card">
      <img src={image} alt={name} className="character-card__image" />
      <div className="character-card__info">
        <h2 className="character-card__name">{name}</h2>
        <div>
          <svg
            onClick={() => handleLike(characterData)}
            width="20"
            height="20"
            viewBox="0 0 13 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`character-card__like ${isLiked ? 'liked' : ''}`}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.5 2.43311L3.5 0.612305L0.5 2.43311V6.33485L6.5 11.4505L12.5 6.33485V2.43311L9.5 0.612305L6.5 2.43311Z"
              fill={isLiked ? '#FFFFFF' : '#EC1D24'} 
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;