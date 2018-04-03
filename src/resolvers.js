import { neo4jgraphql } from 'neo4j-graphql-js';

const resolvers = {
    Query: {
        movieSearch: (obj, args, context, resolveinfo) => {

            return neo4jgraphql(obj, args, context, resolveinfo, true);
        }
    }

}
  
export default resolvers;
  