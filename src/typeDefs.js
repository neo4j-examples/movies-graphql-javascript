export default `
  type Query {
    movieSearch(title: String): [Movie] @cypher(statement:"MATCH (m:Movie) WHERE toLower(m.title) CONTAINS toLower(title) RETURN m")
  }

  type Movie {
      title: String
      released: Int
      tagline: String
      actors: [Person] @relation(name: "ACTED_IN", direction: "IN")
    }


  type Person {
      name: String
  }

`;