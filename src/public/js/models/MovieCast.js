var _ = require('lodash');

function MovieCast(title, cast) {
  _.extend(this, {
    title: title,
    cast: cast.map(function (c) {
      return {
        name: c.name,
        job: 'acted',
        role: ""
      }
    })
  });
}

module.exports = MovieCast;
