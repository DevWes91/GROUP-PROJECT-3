const { User, Recipe, Category } = require('server\models\Recipe.js');
const myRecipes = {
    Query: {
        me: async () => {
            return await User.find({}).populate('recipes').populate({
                path: 'recipes',
                populate: 'title'
            });
        },
        recipes: async () => {
            return await Recipe.find({}).populate('title');
        }
    }
};

module.exports = myRecipes

const myFavorites = {
    Query: {
        favoriteRecipes: async () => {
            return await User.find({}).populate('favorites').populate({
                path: 'favorites',
                populate: 'title'
            });
        },
        favorites: async () => {
            return await Recipe.find({}).populate('title');
        }
    }
};

module.exports = myFavorites;

const users = {
    Query: {
        users: () => {
            User.find({}).populate('username');
        }
    }
};

module.exports = users;

const recipeCategory = {
    Query: {
        recipeCategory: async () => {
            return await Recipe.find({}).populate('category').populate({
                path: 'category',
                populate: 'Category'
            });
        },
        category: async () => {
            return await Recipe.find({}).populate('category');
        },
        categories: async () => {
            return await Category.find({});
        }
    }
};

module.exports = recipeCategory;

const allRecipies = {
    Query: {
        allRecipies: () => {
            Recipe.find({}).populate('title')
        }
    }
};

module.exports = allRecipies;