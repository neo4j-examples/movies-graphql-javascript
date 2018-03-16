import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from './typeDefs';
import resolvers from './resolvers';
import { cors } from 'cors';
import { v1 as neo4j } from 'neo4j-driver';

const {
    PORT = 8080,
    NEO4J_URL = "bolt://localhost:7687",
    NEO4J_USER = "neo4j",
    NEO4J_PASSWORD = "letmein"
} = process.env;


const app = express();

app.use(express.static('lib'));
app.use(bodyParser.json());

const schema = makeExecutableSchema({ typeDefs, resolvers });
app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));

app.use(
    '/graphql',
    graphqlExpress(req => ({
        schema,
        context: {
            driver: neo4j.driver(NEO4J_URL, neo4j.auth.basic(NEO4J_USER, NEO4J_PASSWORD))
        }
    }))
);

app.use(
    '/graphiql',
    graphiqlExpress({
        endpointURL: '/graphql'
    })
)