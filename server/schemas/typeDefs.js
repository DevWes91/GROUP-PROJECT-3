const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    recipes: [Recipe]
    favorites: [Recipe]
  }

  type Recipe {
    _id: ID!
    title: String!
    description: String
    ingredients: [String]!
    instructions: [String]!
    category: Category!
    prepTime: Int
    cookTime: Int
    servings: Int
    createdBy: User!
    image: String
    shareableLink: String
    createdAt: String
  }

  enum Category {
    VEGETARIAN
    MEAT_BASED
    SEAFOOD
    DESSERT
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    recipes(category: Category): [Recipe]
    recipe(_id: ID!): Recipe
    favoriteRecipes: [Recipe]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addRecipe(title: String!, description: String, ingredients: [String]!, instructions: [String]!, category: Category!, prepTime: Int, cookTime: Int, servings: Int, image: String): Recipe
    updateRecipe(_id: ID!, title: String, description: String, ingredients: [String], instructions: [String], category: Category, prepTime: Int, cookTime: Int, servings: Int, image: String): Recipe
    deleteRecipe(_id: ID!): Recipe
    toggleFavorite(recipeId: ID!): User
  }
`;

module.exports = typeDefs;

