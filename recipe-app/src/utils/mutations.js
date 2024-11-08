import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_RECIPE = gql`
  mutation addRecipe($title: String!, $description: String, $ingredients: [String]!, $instructions: [String]!, $category: Category!, $prepTime: Int, $cookTime: Int, $servings: Int, $image: String) {
    addRecipe(title: $title, description: $description, ingredients: $ingredients, instructions: $instructions, category: $category, prepTime: $prepTime, cookTime: $cookTime, servings: $servings, image: $image) {
      _id
      title
      description
      ingredients
      instructions
      category
      prepTime
      cookTime
      servings
      image
    }
  }
`;

export const UPDATE_RECIPE = gql`
  mutation updateRecipe($_id: ID!, $title: String, $description: String, $ingredients: [String], $instructions: [String], $category: Category, $prepTime: Int, $cookTime: Int, $servings: Int, $image: String) {
    updateRecipe(_id: $_id, title: $title, description: $description, ingredients: $ingredients, instructions: $instructions, category: $category, prepTime: $prepTime, cookTime: $cookTime, servings: $servings, image: $image) {
      _id
      title
      description
      ingredients
      instructions
      category
      prepTime
      cookTime
      servings
      image
    }
  }
`;

export const DELETE_RECIPE = gql`
  mutation deleteRecipe($_id: ID!) {
    deleteRecipe(_id: $_id) {
      _id
    }
  }
`;

export const TOGGLE_FAVORITE = gql`
  mutation toggleFavorite($recipeId: ID!) {
    toggleFavorite(recipeId: $recipeId) {
      _id
      favorites {
        _id
        title
      }
    }
  }
`;
