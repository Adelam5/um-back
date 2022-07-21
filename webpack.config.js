const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "production",
  entry: path.join(__dirname, "./src/server.js"),
  output: {
    path: path.join(__dirname, "/dist/"),
    filename: "main.js",
    publicPath: "/dist/",
  },
  target: "node",
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
};
