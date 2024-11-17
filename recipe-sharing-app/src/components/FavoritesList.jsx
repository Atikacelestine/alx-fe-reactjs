import React from "react";
import { useRecipeStore } from '../store';

const FavoritesList = () => {
  const favorites = useRecipeStore(state => state.favorites.map(id =>
    state.recipes.find(recipe => recipe.id === id)
))};


return (
    <div style={{ marginTop: '20px' }}>
    <h2>My Favorites</h2>
    {favorites.length === 0 ? (
      <p>No favorites yet. Add some!</p>
    ) : (
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {favorites.map((recipe) => (
          <li
            key={recipe.id}
            style={{
              border: '1px solid #ddd',
              padding: '10px',
              marginBottom: '10px',
              borderRadius: '5px',
            }}
          >
            <h3>{recipe.title}</h3>
            <p>Ingredients: {recipe.ingredients.join(', ')}</p>
            <button
              onClick={() => removeFromFavorites(recipe.id)}
              style={{
                backgroundColor: '#f00',
                color: '#fff',
                padding: '5px 10px',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Remove from Favorites
            </button>
          </li>
        ))}
      </ul>
    )}
  </div>
);
export default FavoritesList;
