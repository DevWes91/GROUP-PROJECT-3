import React from 'react';

function RecipeCard({ recipe, onToggleFavorite }) {
  const handleToggle = () => {
    onToggleFavorite(recipe.id);
  };

  return (
    <div className="recipe-card">
      <h3>{recipe.title}</h3>
      <p>Category: {recipe.category}</p>
      <p>Ingredients: {recipe.ingredients}</p>
      <p>Instructions: {recipe.instructions}</p>
      <button onClick={handleToggle}>
        {recipe.isFavorite ? 'Unfavorite' : 'Favorite'}
      </button>
    </div>
  );
}

export default RecipeCard;