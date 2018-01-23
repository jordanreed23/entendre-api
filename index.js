import express from 'express';
import bodyParser from 'body-parser';
import {graphqlExpress, graphiqlExpress} from 'apollo-server-express';
// import typeDefs from './schema';
// import resolvers from './resolvers'
import models from './models';
import {makeExecutableSchema} from 'graphql-tools';
import path from 'path';
import {fileLoader, mergeTypes, mergeResolvers} from 'merge-graphql-schemas';

const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './schema')));

const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers')));

const schema = makeExecutableSchema({typeDefs, resolvers});

const PORT = 8081;

const app = express();

// bodyParser is needed just for POST.
const graphqlEndpoint = '/graphql';

app.use(graphqlEndpoint, bodyParser.json(), graphqlExpress({schema, context: {models}}));

app.use('/graphiql', graphiqlExpress({endpointURL: graphqlEndpoint}));

models.sequelize.sync(
// {force: true} //Use to reset db
).then(() => {
app.listen(PORT);
});
