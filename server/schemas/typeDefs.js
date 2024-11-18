//const { gql } = require('apollo-server-express');

export const typeDefs = gql`
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


/*
//Allows user to log in as well as register for new account
const addUser = {
  Query: {
    username: parent => {
      return parent.username;
    },
    email: parent => {
      return parent.email;
    },
    password: parent => {
      return parent.password;
    }
  },
  Query: {
    username: () => {
      return `Enter username`;
    },
    email: () => {
      return `Enter email`;
    },
    password: () => {
      return `Enter password`
    },
  },
  Mutation: {
    login: async ({ User: { username} }, { User: { email } }, { User: { password } }, context) => {
      console.log(context);
      return User.username, User.email, User.password
    },
    createUser: () => ({
      errors: [
        {
          username: 'Not valid',
          email: 'Invalid',
          password: 'Wrong'
        }
      ],
      user: {
        username: '',
        email: '',
        password: ''
      }
    })
  },
};
console.log(addUser);


/*
//Allows user to add new recipe
const addRecipe = {
  Query: {
    title: parent => {
      return parent.title;
    },
    description: parent => {
      return parent.description;
    },
    ingredients: parent => {
      return parent.ingredients;
    },
    instructions: parent => {
      return parent.instructions;
    },
    category: Category => {
      return Category;
    },
    prepTime: parent => {
      return parent.prepTime;
    },
    cookTime: parent => {
      return parent.cookTime;
    },
    servings: parent => {
      return parent.servings;
    },
    image: parent => {
      return parent.image;
    },
  },
  Mutation: {
    view: ({ Recipe: { title } }, { Recipe: { description } }, { Recipe: { ingredients } }, 
      { Recipe: { instructions } }, { Category }, { Recipe: { prepTime } }, { Recipe: { prepTime } }, 
      { Recipe: { cookTime } }, { Recipe: { servings } }, { Recipe: { image } }, context) => {
      console.log(context);
      return Recipe.title, Recipe.description, Recipe.ingredients, Recipe.instructions, Category, Recipe.prepTime, Recipe.cookTime, Recipe.servings, Recipe.image; 
    },
    add: () => ({
      errors: [
        {
          title: '',
          description: '',
          ingredients: '',
          instructions: '',
          Category: '',
          prepTime: '',
          cookTime: '',
          servings: '',
          image: ''
        }
      ],
      Recipe: {
        title: '',
        description: '',
        ingredients: '',
        instructions: '',
        Category: '',
        prepTime: '',
        cookTime: '',
        servings: '',
        image: ''
      }
    })

  }
};
console.log(addRecipe);



//Allows user to update existing recipe
const updateRecipe = {
  Query: {
    _id: parent => {
      return parent._id
    },
    title: parent => {
      return parent.title;
    },
    description: parent => {
      return parent.description;
    },
    ingredients: parent => {
      return parent.ingredients;
    },
    instructions: parent => {
      return parent.instructions;
    },
    category: Category => {
      return Category;
    },
    prepTime: parent => {
      return parent.prepTime;
    },
    cookTime: parent => {
      return parent.cookTime;
    },
    servings: parent => {
      return parent.servings;
    },
    image: parent => {
      return parent.image;
    },
  },
  Mutation: {
    view: ( { Recipe: { _id} }, { Recipe: { title } }, { Recipe: { description } }, { Recipe: { ingredients } }, 
      { Recipe: { instructions } }, { Category }, { Recipe: { prepTime } }, { Recipe: { prepTime } }, 
      { Recipe: { cookTime } }, { Recipe: { servings } }, { Recipe: { image } }, context) => {
      console.log(context);
      return Recipe.title, Recipe.description, Recipe.ingredients, Recipe.instructions, Category, Recipe.prepTime, Recipe.cookTime, Recipe.servings, Recipe.image; 
    },
    add: () => ({
      errors: [
        {
          _id: '',
          title: '',
          description: '',
          ingredients: '',
          instructions: '',
          Category: '',
          prepTime: '',
          cookTime: '',
          servings: '',
          image: ''
        }
      ],
      Recipe: {
        _id: `${Recipe._id}`,
        title: `${Recipe.title}`,
        description: `${Recipe.description}`,
        ingredients: `${Recipe.ingredients}`,
        instructions: `${Recipe.instructions}`,
        Category: `${Category}`,
        prepTime: `${Recipe.prepTime}`,
        cookTime: `${Recipe.cookTime}`,
        servings: `${Recipe.servings}`,
        image: `${Recipe.image}`

      }
    })

  }
};
console.log(updateRecipe);



//Allows user to delete recipe
const deleteRecipe = {
  Query: {
    _id: Recipe => {
      return Recipe._id;
    }
  },
  Mutation: {
    view: parent => {
      console.log(context);
      return parent._id;
    },
    delete: Recipe => {
      Recipe
    }
  }
};
console.log(deleteRecipe);



//Allows user to toggle favorite recipes
const favoriteRecipes = {
  Query: {
    _id: Recipe => {
      return Recipe._id;
    },
    _id: User => {
      return User._id;
    }
  },
  Mutation: {
    view: async Recipe => {
      console.log(context);
      return Recipe._id;
    },
    view: async User => {
      console.log(context);
      return User._id
    },
    toggle: async Recipe => {
      Recipe._id
    }
  }
};
console.log(favoriteRecipes);

*/