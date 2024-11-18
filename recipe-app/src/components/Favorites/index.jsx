import React, { useEffect, useState } from "react";
import RecipeCard from "../RecipeCard/index.jsx";

function Favorites() {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const data = await client.request
      const filteredRecipes = data.recipes.filter((recipe) => {
        return recipe.isFavorite;
      });
      setFavoriteRecipes(filteredRecipes); 
    };
    fetchFavorites();
  }, []);
  console.log(favoriteRecipes);
  const handleFavoriteToggle = async(id, isFavorite) => {
    setFavoriteRecipes((prevFavorites) =>
      prevFavorites.map((recipe) =>
        recipe.id === id ? { ...recipe, isFavorite} : recipe
      )
    );  
  };

  return(
    <div>
    <h2>Your Favorite Recipes </h2>
    {FavoriteRecipes.length === 0 ? (
      <p>No favorite recipes yet.</p>
    ) : (
        FavoriteRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            onFavoriteToggle={handleFavoriteToggle}
          />
        ))
      )}
    </div>
  );
}
export default Favorites;