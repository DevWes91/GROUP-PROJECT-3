import React, { useState } from 'react';

function RecipeForm() {
    const [recipe, setRecipe] = useState({
        title: '',
        category: '',
        ingredients: '',
        instructions: '',
        servings: '',
        cookTime: '' 
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(`Updating ${name}:`, value);
        setRecipe((prevRecipe) => ({
            ...prevRecipe,
            [name]: value,
        }));
    };
    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submission triggered');
        console.log('Submitted Recipe:', recipe);
      
    };

    return (
            <form onSubmit={handleSubmit}>
            <label>
                    Title:
            <input
                    type="text"
                    name="title"
                    value={recipe.title}
                    onChange={handleChange}
                    required
                />
            </label>

            <label>
                Category:
               <select
                     name='category'
                     value={recipe.category}
                     onChange={handleChange}
                     required
                 >
                    <option value="VEGETARIAN">Vegetarian</option>
                    <option value="MEAT_BASED">Meat-Based</option>
                    <option value="SEAFOOD">Seafood</option>
                    <option value="DESSERT">Dessert</option>
                </select>
            </label>

                <label>
                    Ingredients:
                <textarea
                 name="ingredients"
                value={recipe.ingredients}
                onChange={handleChange}
                required
             />
            </label>
             
                <label>
                    Instructions:
                <textarea
                    name="instructions"
                    value={recipe.instructions}
                    onChange={handleChange}
                    required
                />
             </label>   

                <label>
                    Servings:
                <input
                    type="number"
                    name="servings"
                    value={recipe.servings}
                    onChange={handleChange}
                    required
                />  
             </label>

                <label>
                    Cook Time:
                <input
                    type="text"
                    name="cookTime"
                    value={recipe.cookTime}
                    onChange={handleChange}
                    required
                />
            </label>
            <button type="submit">Add Recipe</button>
            </form>
        
    );
}

export default RecipeForm;     

