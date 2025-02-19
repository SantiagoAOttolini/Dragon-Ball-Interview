import { useNavigate } from 'react-router-dom';
import './styles.css';
import headerImage from '../../assets/header.png';
import likeImage from '../../assets/like.svg';

function Header({ likedCount }) {
  const navigate = useNavigate();
  return (
    <header className="header">
      <img src={headerImage} alt="Header Logo" className="header__image" />
      <div className="header__like-container" onClick={() => navigate('/favorites')}>
        <img src={likeImage} alt="Like Icon" className="header__icon" />
        <span className="header__like-count">{likedCount}</span>
      </div>
    </header>
  );
}

export default Header;