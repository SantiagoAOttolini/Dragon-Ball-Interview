import { useState, useEffect } from 'react';

const useLike = () => {
  const [likedCharacters, setLikedCharacters] = useState(() => {
    const savedLikes = JSON.parse(localStorage.getItem('likedCharacters'));
    return savedLikes || [];
  });

  useEffect(() => {
    localStorage.setItem('likedCharacters', JSON.stringify(likedCharacters));
  }, [likedCharacters]);

  const handleLike = (character) => {
    setLikedCharacters((prev) => {
      const isLiked = prev.some((liked) => liked.id === character.id);
      if (isLiked) {
        return prev.filter((liked) => liked.id !== character.id); // Remover like
      } else {
        return [...prev, character];
      }
    });
  };

  return {
    likedCharacters,
    handleLike,
    likedCount: likedCharacters.length,
  };
};

export default useLike;