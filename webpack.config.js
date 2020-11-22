const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const buildDir = "build";
const publicDir = "public";

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    main: "./src/main.ts",
  },
  output: {
    path: path.resolve(__dirname, buildDir),
    filename: "[name]-bundle.js",
  },
  devServer: {
    contentBase: path.join(__dirname, buildDir),
    port: 8080,
  },
  resolve: {
    // Add ".ts" and ".tsx" as resolvable extensions.
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: "babel-loader" },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: publicDir }],
    }),
  ],
};
