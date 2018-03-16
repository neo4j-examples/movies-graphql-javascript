const resolvers = {
    Query: {
        movieSearch: (_, args, context) => {
            const session = context.driver.session();

            var query = `
                MATCH (movie:Movie) 
                WHERE toLower(movie.title) CONTAINS toLower($title)
                RETURN movie
            `;

            return session.run(query, args)
            .then(result => {
                return result.records.map(
                    record => { return record.get("movie").properties }
                )
            })
        }
    },
    Movie: {
        cast: (obj, args, context) => {
            const session = context.driver.session();

            var query = `
                MATCH (m:Movie {title: $title})<-[r:ACTED_IN]-(actor:Person)
                RETURN r.roles AS roles, actor
            `;

            return session.run(query, {title: obj.title})
            .then(result => {
                return result.records.map(
                    (record) => { 
                        const c = {};
                        c['roles'] = record.get("roles");
                        c['actor'] = record.get("actor").properties; 
                        return c;
                             
                    }
                )
            })
        }
    }

}
  
export default resolvers;
  