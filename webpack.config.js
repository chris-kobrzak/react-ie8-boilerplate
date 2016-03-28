var config = {
  entry: "./src/main.jsx",

  output: {
    path: "./src/",
    filename: "bundle.js"
  },

  module: {
    loaders: [{
      test: /\.jsx?/,
      exclude: /node\_modules/,
      loaders: [ "babel" ]
    }]
  },

  devServer: {
    inline: true,
    contentBase: './src',
    port: 3333
  },

  devtool: "source-map"
}

module.exports = config
