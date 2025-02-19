//Vendors
import React from "react";
//Styles
import "./character-detail.styles.css";
//Hooks
import useCharacterDetail from "../../hooks/useCharacterDetail.hook";
import { useParams } from "react-router-dom";
//Components
import CharacterCard from "../../components/character-card/character-card.component";

function CharacterDetail() {
  const { id } = useParams();
  const { character, loading } = useCharacterDetail(id);

  if (loading) return <p className="loading">Cargando detalles...</p>;
  if (!character) return <p>No se encontró el personaje.</p>;

  return (
    <div className="character-detail">
      <div className="character-detail__main">
        <div className="character-detail__image-container">
          <img
            src={character.image}
            alt={character.name}
            className="character-detail__image"
          />
        </div>
        <div className="character-detail__info">
          <h1 className="character-detail__name">{character.name}</h1>
          <p className="character-detail__description">
            {character.description}
          </p>
        </div>
      </div>

      <h2>Transformaciones</h2>
      <div className="character-list">
        {character.transformations && character.transformations.length > 0 ? (
          character.transformations.map(({ id, name, image }) => (
            <CharacterCard
              key={id}
              name={name}
              image={image}
              characterData={{ id, name, image }}
              isLiked={false}
              handleLike={() => {}}
              clickable={false}
            />
          ))
        ) : (
          <p>No hay transformaciones disponibles.</p>
        )}
      </div>
    </div>
  );
}

export default CharacterDetail;
