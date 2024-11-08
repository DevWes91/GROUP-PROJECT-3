import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      recipes {
        _id
        title
        description
        category
      }
      favorites {
        _id
        title
        description
        category
      }
    }
  }
`;

export const QUERY_RECIPES = gql`
  query getRecipes($category: Category) {
    recipes(category: $category) {
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
      createdBy {
        _id
        username
      }
    }
  }
`;

export const QUERY_RECIPE = gql`
  query getRecipe($recipeId: ID!) {
    recipe(_id: $recipeId) {
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
      createdBy {
        _id
        username
      }
    }
  }
`;
