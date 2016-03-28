var path = require("path")
var webpack = require("webpack")
var mergeWebpackConfig = require("webpack-merge")

var TARGET = process.env.npm_lifecycle_event

var commonConfig = {
  entry: [
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
      loaders: ["babel"]
    }]
  },

}

var devConfig = {}
if ( TARGET === "start" || ! TARGET ) {
  devConfig = {
    entry: [
      "webpack-dev-server/client?http://localhost:3200",
      "webpack/hot/only-dev-server",
      "./src/main.jsx"
    ],

    module: {
      loaders: [{
        test: /\.jsx?/,
        exclude: /node\_modules/,
        loaders: ["react-hot", "babel"]
      }]
    },

    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ],

    devtool: "source-map"
  }
}

module.exports = mergeWebpackConfig(commonConfig, devConfig)
