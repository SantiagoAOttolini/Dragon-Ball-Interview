//Hooks
import { useState, useEffect } from 'react'

const useLike = () => {
  const [likedCharacters, setLikedCharacters] = useState(() => {
    const savedLikes = JSON.parse(localStorage.getItem('likedCharacters'))
    return savedLikes || []
  })

  const [showFavorites, setShowFavorites] = useState(false)

  useEffect(() => {
    localStorage.setItem('likedCharacters', JSON.stringify(likedCharacters))
  }, [likedCharacters])

  const handleLike = (character) => {
    setLikedCharacters((prev) => {
      const isLiked = prev.some((liked) => liked.id === character.id)
      return isLiked
        ? prev.filter((liked) => liked.id !== character.id)
        : [...prev, character]
    })
  }

  const handleToggleFavorites = () => setShowFavorites((prev) => !prev)
  const handleResetCharacters = () => setShowFavorites(false)

  return {
    likedCharacters,
    handleLike,
    likedCount: likedCharacters.length,
    showFavorites,
    handleToggleFavorites,
    handleResetCharacters,
  }
}

export default useLike
