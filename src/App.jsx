import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CharacterHome from './pages/character-home/character-home.page'
import CharacterDetail from './pages/character-detail/character-detail.page'
import Header from './components/header/header.component'
import useLike from './hooks/useLike.hook'

function App() {
  const {
    likedCharacters,
    handleLike,
    likedCount,
    showFavorites,
    handleToggleFavorites,
    handleResetCharacters,
  } = useLike()

  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Header
        likedCount={likedCount}
        onToggleFavorites={handleToggleFavorites}
        onResetCharacters={handleResetCharacters}
      />
      <Routes>
        <Route
          path="/"
          element={
            <CharacterHome
              likedCharacters={likedCharacters}
              handleLike={handleLike}
              showFavorites={showFavorites}
            />
          }
        />
        <Route path="/details/:id" element={<CharacterDetail />} />
      </Routes>
    </Router>
  )
}

export default App
