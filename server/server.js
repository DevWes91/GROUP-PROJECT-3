import { typeDefs } from "./schemas/typeDefs";

const auth = require('./utils', './moddleware');

if (auth == false) {
    console.log('Could not complete task');
} else {
    console.log('Task completed');
};

const server = new Server({
    typeDefs,
    mutations
});

server.listen().then(({ PORT }) => {
    console.log(`Server ready at ${PORT}`)
})