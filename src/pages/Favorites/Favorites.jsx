import React from 'react';
import { useFavorites } from '../../context/FavoritesContext';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import './Favorites.css';

const Favorites = () => {
  const { favorites, removeFromFavorites } = useFavorites();

  return (
    <section className='favorites'>
      <div className='fav-container'>
        <div className='favorites-header'>
          <FaStar className='star-icon' />
          <h2 className='favorites-title'>Your Starred Books ᯓ✩</h2>
        </div>
        {favorites.length === 0 ? (
          <p>No starred books yet. Start exploring to add some!</p>
        ) : (
          <div className='favorites-grid'>
            {favorites.map(book => (
              <div key={book.id} className='favorite-card'>
                <img src={book.cover_img} alt={book.title} />
                <h3>{book.title}</h3>
                <div className='favorite-actions'>
                  <Link to={`/search/book/${book.id}`}>View Details</Link>
                  <button onClick={() => removeFromFavorites(book.id)}>
                    Unstar
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Favorites;