var _ = require('lodash');

function Movie(movie) {
  _.extend(this, movie);

  if (this.id) {
    this.id = this.id.toNumber();
  }
  if (this.duration) {
    this.duration = this.duration.toNumber();
  }
}

module.exports = Movie;
