class Mutations {

    constructor(endpoint) {
        this.client = new GraphQLClient(endpoint);
    }

    async addUser(username, email, password) {
        const addUserMutation = gql`
            mutation addUser($username: String! $email: String!, $password: !String) {
                addUser(username: $username, email: $email, password: $password) {
                    token
                    user {
                        _id
                        username
                        email
                        password
                    }
                }
            }
        `;

        const variables = { username, email, password };
        try {
            const data = await this.client.request(addUserMutation, variables);
            console.log('New user registered:', data);
            return data;
        } catch (error) {
            console.error('New user could not be registered:', error);
        }
    }

    async loginUser(email, password) {
        const loginUserMutation = gql`
            mutation loginUser($email: String!, $password: String!) {
                loginUser(email: $email, password: $password) {
                    user {
                        username
                        email
                        password
                        recipes
                        favorites
                    }
                }
            }
        `;

        const variables = { email, password };
        try {
            const data = await this.client.request(loginUserMutation, variables);
            console.log('Logged in:', data);
            return data;
        } catch (error) {
            console.error('Could not log in user:', error);
        }
    }

    async addRecipe(title, description, ingredients, instructions, category, prepTime, cookTime, servings, image) {
        const addRecipeMutation = gql`
            mutation addRecipe($title: String!, $description: String, $ingredients: [String]!, $instructions: [String]!, $category: Category!, $prepTime: Int, $cookTime: Int, $servings: Int, $image: String) {
                addRecipe(
                    title: $title,
                    description: $description,
                    ingredients: $ingredients,
                    instructions: $instructions,
                    category: $category,
                    prepTime: $prepTime,
                    cookTime: $cookTime,
                    servings: $servings,
                    image: $image
                ) {
                    username
                    recipes {
                        title
                        category
                        description
                        image
                    }
                    favorites {
                        title
                        category
                        description
                        image
                    }
                }
            }
        `;

        const variable = { title, description, ingredients, instructions, category, prepTime, cookTime, servings, image };
        try {
            const data = await this.client.request(addRecipeMutation, variables);
            console.log('New recipe added:', data);
            return data;
        } catch (error) {
            console.error('Could not save recipe:', error);
        }
    }

    async updateRecipe( _id, title, description, ingredients, instructions, category, prepTime, cookTime, servings, image) {
        const updateRecipeMutation = gql`
            mutation updateRecipe($_id: ID!, $title: String, $description: String, $ingredients: [String], $instructions: [String], $category: Category, $prepTime: Int, $cookTime: Int, $servings: Int, $image: String) {
                updateRecipe(
                    _id: $_id,
                    title: $title,
                    description: $description,
                    ingredients: $ingredients,
                    instructions: $instructions,
                    category: $category,
                    prepTime: $prepTime,
                    cookTime: $cookTime,
                    servings: $servings,
                    image: $image
                ) {
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

        const variables  = { _id, title, description, ingredients, instructions, category, prepTime, cookTime, servings, image};
        try {
            const data = await this.client.request(updateRecipeMutation, variables);
            console.log('Updated recipe:', data);
            return data;
        } catch (error) {
            console.error('Could not update recipe:', error);
        }
    }

    async deleteRecipe(_id) {
        const deleteRecipeMutation = gql`
            mutation deleteRecipe($_id: ID!) {
                deleteRecipe(_id: $_id) {
                    Recipe {
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
            }
        `;

        const variables = { _id };
        try {
            const data = await this.client.request(deleteRecipeMutation, variables);
            console.log('Deleted recipe:', data);
            return data;
        } catch (error) {
            console.error('Could not delete recipe:', error);
        }
    }

    async toggleFavorite(recipeId) {
        const toggleFavoriteMutation = gql`
            mutation toggleFavorite( $recipeId: ID!) {
                toggleFavorite(recipeId: $recipeId) {
                    Recipe {
                        title
                        description
                        image
                    }
                }
            }
        `;

        const variables = { recipeId };
        try {
            const data = await this.client.request(toggleFavoriteMutation, variables);
            console.log('Recipe added to favorites:', data);
            return data;
        } catch (error) {
            console.error('Could not add recipe to favorites:', error);
        }
    }
};

module.exports = Mutations