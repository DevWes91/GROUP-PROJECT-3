import { mongooseModels } from './schemas';
import { typeDefs } from './schemas';
import { resolvers } from './schemas';
import { mutations } from './schemas';

const { ApolloServer, gql } = require('apollo-server');
const connectDB = require('./MongoDB');
const models = require('./models');
const auth = require('./utils', './moddleware');

if (auth == false) {
    console.log('Could not complete task');
} else {
    console.log('Task completed');
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    mutations,
    mongooseModels
});

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`)
})