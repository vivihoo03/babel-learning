const path = require('path');

module.exports = {
    entry: ['babel-polyfill', "./src/app.js"],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.boundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
          ]
    }
}