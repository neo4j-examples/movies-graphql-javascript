# Neo4j Movies Example Application - GraphQL JavaScript Edition

![](./img/screen_shot.png)

## Quickstart

* Start Neo4j ([Download & Install](http://neo4j.com/download)) locally and open the [Neo4j Browser](http://localhost:7474). 
* Install the Movies dataset with `:play movies`, click the statement, and hit the triangular "Run" button.

Then

```
npm install
npm run start
```

Then navigate to `localhost:3000` in your browser.

## How It Works

The frontend for this example application uses jQuery, D3, and ApolloClient to query a GraphQL API.

The backend is an Express.js GraphQL service using graphql-tools and the JavaScript Neo4j driver.

JavaScript assets are transpiled and bundled using Webpack.

