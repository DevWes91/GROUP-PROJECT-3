const { Recipe, Category } = require('server\models\Recipe.js');
const { User } = require('server\models\User.js');

const addUser = {
    Query: {
        addUser: async () => {
            return await User.find({}).populate('username').populate({
                path: 'recipes',
                populate: 'title'
            });
        },
    },
    Mutation: {
        login: () => {
            return true
        },
        register: (parent, args, context, info) => ({
            errors: [
                {
                    field: 'username',
                    message: ''
                }
            ]
        })
    }
};

module.exports = myRecipes;

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


const mongooseModels = require('../models');

module.exports = mongooseModels; */

module.exports = allRecipes;

