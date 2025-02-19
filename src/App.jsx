import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CharacterHome from './pages/character-home/CharacterHome';
import CharacterDetail from './pages/character-detail/CharacterDetail';
import Header from './components/header/Header';
import { useState, useEffect } from 'react';

function App() {
  const [likedCharacters, setLikedCharacters] = useState(() => {
    const savedLikes = JSON.parse(localStorage.getItem('likedCharacters'));
    return savedLikes || [];
  });

  // Guardar cambios en localStorage
  useEffect(() => {
    localStorage.setItem('likedCharacters', JSON.stringify(likedCharacters));
  }, [likedCharacters]);

  const handleLike = (character) => {
    setLikedCharacters((prev) => {
      const isLiked = prev.some((liked) => liked.id === character.id);
      return isLiked
        ? prev.filter((liked) => liked.id !== character.id)
        : [...prev, character];
    });
  };

  return (
    <Router>
      <Header likedCount={likedCharacters.length} />
      <Routes>
        <Route
          path="/"
          element={
            <CharacterHome
              likedCharacters={likedCharacters}
              handleLike={handleLike}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <CharacterDetail
              likedCharacters={likedCharacters}
              handleLike={handleLike}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;