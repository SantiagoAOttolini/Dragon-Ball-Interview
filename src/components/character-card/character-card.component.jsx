//Vendors
import React from 'react'
//Styles
import './character-card.styles.css'
//Hooks
import { useNavigate, useLocation } from 'react-router-dom'
//Constants
import constants from './constants/character-card.constants'

function CharacterCard({
  name,
  image,
  characterData,
  handleLike,
  isLiked,
  clickable = true,
}) {
  const navigate = useNavigate()
  const location = useLocation()

  const handleCardClick = () => {
    if (clickable) navigate(`/details/${characterData.id}`)
  }

  return (
    <div className="character-card" onClick={handleCardClick}>
      <img src={image} alt={name} className="character-card__image" />
      <div className="character-card__info">
        <h2 className="character-card__name">{name}</h2>
        {!location.pathname.includes('/details') && (
          <div
            role="button"
            onClick={(e) => {
              e.stopPropagation()
              handleLike(characterData)
            }}
          >
            <svg
              {...constants.SVG_PROPS}
              className={`character-card__like ${isLiked ? 'liked' : ''}`}
            >
              <path
                {...constants.SVG_PATH_PROPS}
                fill={isLiked ? '#FFFFFF' : '#EC1D24'}
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  )
}

export default CharacterCard
