var path = require("path")
var webpack = require("webpack")

var config = {
  entry: [
    "webpack-dev-server/client?http://localhost:3200",
    "webpack/hot/only-dev-server",
    "./src/main.jsx"
  ],

  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/static/"
  },

  module: {
    loaders: [{
      test: /\.jsx?/,
      exclude: /node\_modules/,
      loaders: [ "react-hot", "babel" ]
    }]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  devtool: "source-map"
}

module.exports = config
