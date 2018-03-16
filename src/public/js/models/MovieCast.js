var _ = require('lodash');

function MovieCast(title, cast) {
  _.extend(this, {
    title: title,
    cast: cast.map(function (c) {
      return {
        name: c.actor.name,
        job: 'acted',
        role: c.roles
      }
    })
  });
}

module.exports = MovieCast;
