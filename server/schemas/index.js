const mongooseModels = require('../models');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const mutations = require('./mutations');

module.exports = { mongooseModels, typeDefs, resolvers, mutations };