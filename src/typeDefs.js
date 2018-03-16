export default `
  type Query {
    movieSearch(title: String): [Movie]
  }

  type Movie {
      title: String
      released: Int
      tagline: String
      cast: [ActorRole]
  }

  type ActorRole {
      roles: [String]
      actor: Actor
  }

  type Actor {
      name: String
  }

`;