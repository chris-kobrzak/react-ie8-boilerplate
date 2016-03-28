var path = require("path")
var webpack = require("webpack")
var mergeWebpackConfig = require("webpack-merge")
var ExtractTextPlugin = require("extract-text-webpack-plugin")

var TARGET = process.env.npm_lifecycle_event

var config = {}

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
  }
}

if (TARGET === "dev:start" || ! TARGET) {
  config = {
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
      }, {
        test: /\.css$/,
        loaders: ["style", "css"],
        include: path.join(__dirname, "src")
      }]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ],

    devtool: "source-map"
  }
}

if (TARGET === "demo:start" || TARGET === "prod:start"
 || TARGET === "demo:build" || TARGET === "prod:build" || TARGET === "build") {
  config = {
    module: {
      loaders: [{
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style", "css"),
        include: path.join(__dirname, "src")
      }]
    },
    plugins: [
      // Output extracted CSS to a file
      new ExtractTextPlugin("styles.css")
    ]
  }

  if (TARGET.match(/^demo.*/gi)) {
    config.devtool = "source-map"
  }
}

module.exports = mergeWebpackConfig(commonConfig, config)
