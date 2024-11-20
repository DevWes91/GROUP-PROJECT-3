
const { Recipe, Category } = require('server\models\Recipe.js');
const { User } = require('server\models\User.js');


const resolvers = {
    Query: {
       me(args) {
        return db.User.find((User) => User.id === args.id)
       },
       users() {
        return db.User
       },
       recipes(args) {
        return db.recipe.find((category) => Recipe.category === args.id)
       },
       recipe(args) {
        return db.Recipe.find((title) => Recipe.title === args.id)
       },
       favoriteRecipes() {
        return db.Recipe
       }
    }
}
