const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

const buildDir = "build";

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, buildDir),
    port: 8080,
    historyApiFallback: {
      index: "index.html",
    },
  },
});
