'use stript';
var webpack = require('webpack');
var chalk = require('chalk');


module.exports = {
  devtool: "eval-source-map",
  entry: [
  './src/app.jsx'
  ],
  output: {
    path: __dirname + '/dist/js',
    filename: 'bundle.js',
    publicPath: '/dist/js/'
  },
  jshint: {
    reporter: function(errors) {
      console.log(chalk.underline.bgBlue("jshint: " + this.resourcePath));
      errors.forEach(function(error) {
        console.log(chalk.cyan("line " + error.line + ": ") + error.reason);
      });
      console.log('\n');
    }
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loaders: ['jsx-loader?harmony. ?stripTypes'], exclude: /node_modules/ },
      { test: /\.jsx?/, exclude: __dirname + '/node_modules', loader: 'jsxhint-loader?harmony' },
      { test: /\.scss$/, loader: 'style!css!sass?indentedSyntax=sass' }
    ]
  },
};
