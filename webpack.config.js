var path = require('path');

module.exports = {
    entry: './src/public/js/handleMovieSearch.js',
    output: {
        filename: 'bundle.js',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, 'lib/js')
    }
};
