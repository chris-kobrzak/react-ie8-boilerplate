var webpack = require("webpack")
var WebpackDevServer = require("webpack-dev-server")
var config = require("./webpack.config")
var port = 3200

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  headers: { "Access-Control-Allow-Origin": "*" }
}).listen(port, "localhost", function (error) {
  if (error) {
    return console.log(error)
  }

  console.log("Listening at http://localhost:" + port)
})
