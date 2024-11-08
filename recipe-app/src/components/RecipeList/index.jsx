import React, { useEffect, useState } from 'react';
import RecipeCard from '../RecipeCard';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    
    const fetchRecipes = async () => {
      const data = []; // Placeholder for API call
      setRecipes(data);
    };
    fetchRecipes();
  }, []);

  const handleFavoriteToggle = (id) => {
    setRecipes((prevRecipes) =>
      prevRecipes.map((recipe) =>
        recipe.id === id ? { ...recipe, isFavorite: !recipe.isFavorite } : recipe
      )
    );
  };

  return (
    <div className="recipe-list">
      <h2>All Recipes</h2>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} onToggleFavorite={handleFavoriteToggle} />
      ))}
    </div>
  );
}

export default RecipeList;