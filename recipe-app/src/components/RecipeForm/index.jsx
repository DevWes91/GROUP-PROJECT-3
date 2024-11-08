import React, { useState } from "react";

function RecipeForm() {
    const [recipe, setRecipe] = useState({
        title: '',
        category: '',
        ingredients: '',
        instructions: '',
        servings: '',
        cookTime: '',
        
    });
    const handleChange = (event) => {
        setRecipe({ ...recipe, [event.target.name]: event.target.value });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('New Recipe:', recipe);
    };

    return (
        <div ClassName='recipe-form'>
            <h2>Add New Recipe</h2>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input
                    type="title"
                    value={recipe.category}
                    onChange={handleChange}
                    required
                />
                <label>Category</label>
               <select name='category' onChange={handleChange}>
                    <option value="VEGETARIAN">Vegetarian</option>
                    <option value="MEAT_BASED">Meat-Based</option>
                    <option value="SEAFOOD">Seafood</option>
                    <option value="DESSERT">Dessert</option>
                </select>
                <label>Ingredients</label>
                <textarea
                    type="ingredients"
                    value={recipe.ingredients}
                    onChange={handleChange}
                    required
                />
                <label>Instructions</label>
                <textarea
                    name="instructions"
                    value={recipe.instructions}
                    onChange={handleChange}
                    required
                />
                <label>Servings</label>
                <input
                    type="number"
                    name="servings"
                    value={recipe.servings}
                    onChange={handleChange}
                    required
                />  
                <label>Cook Time</label>
                <input
                    type="number"
                    name="cookTime"
                    value={recipe.cookTime}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Add Recipe</button>
            </form>
        </div>
    );
}
export default RecipeForm      