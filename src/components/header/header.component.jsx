//Vendors
import React from 'react'
//Styles
import './header.styles.css'
//Assets
import headerImage from '../../assets/header.png'
import likeImage from '../../assets/like.svg'
//Hooks
import { useNavigate } from 'react-router-dom'

function Header({ likedCount, onToggleFavorites, onResetCharacters }) {
  const navigate = useNavigate()

  const handleLikeClick = () => {
    navigate('/')
    onToggleFavorites()
  }

  const handleLogoClick = () => {
    navigate('/')
    onResetCharacters()
  }

  return (
    <header className="header">
      <img
        src={headerImage}
        alt="Header Logo"
        className="header__image"
        onClick={handleLogoClick}
        style={{ cursor: 'pointer' }}
      />
      <div
        className="header__like-container"
        onClick={handleLikeClick}
        style={{ cursor: 'pointer' }}
      >
        <img src={likeImage} alt="Like Icon" className="header__icon" />
        <span className="header__like-count">{likedCount}</span>
      </div>
    </header>
  )
}

export default Header
