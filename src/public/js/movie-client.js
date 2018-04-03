
var Movie = require('./models/Movie');
var MovieCast = require('./models/MovieCast');
var _ = require('lodash');

var ApolloClient = require('apollo-client-preset');
var gql = require('graphql-tag');

const client = new ApolloClient.default();

function searchMovies(queryString) {

    return client
        .query({
            query: gql`query movieSearch($title:String){
                movieSearch(title: $title) {
                  title
                  tagline
                  released
                }
              }`,
            variables: {title: queryString}
        })
        .then(data => {
            console.log(data);
            return data.data.movieSearch.map(record => {
                return new Movie(record);
            })
        })
        .catch(error => {throw error})
}

function getMovie(title) {
    return client
        .query({
            query: gql`query movieSeach($title:String){
                movieSearch(title: $title) {
                  title
                  actors {
                    name
                  }
                }
              }`,
            variables: {title}
        })
        .then(data => {
            console.log(data);
            const movie = data.data.movieSearch[0];
            return new MovieCast(movie.title, movie.actors);

        })
        .catch(error => {throw error});
}

function getGraph() {

    return client
        .query({
            query: gql`{
                movieSearch(title: "") {
                  title
                  actors {
                    name
                  }
                }
              }`
        })
        .then(data => {
            var nodes = [], rels = [], i = 0;
            data.data.movieSearch.forEach(res => {
                nodes.push({title: res.title, label: 'movie'});
                var target = i;
                i++;

                res.actors.forEach(c => {
                    var actor = {title: c.name, label: 'actor'};
                    var source = _.findIndex(nodes, actor);
                    if (source == -1) {
                        nodes.push(actor);
                        source = i;
                        i++;
                    }
                    rels.push({source, target})
                })
            })

            return {nodes, links: rels};
        })
        .catch(error => {throw error});
}

exports.searchMovies = searchMovies;
exports.getMovie = getMovie;
exports.getGraph = getGraph;