const path = require("path");

module.exports = {
  entry: ["babel-polyfill", "./front/index.js", "./front/index.scss"],
  output: {
    path: path.join(__dirname, ".public/base"),
    publicPath: "/",
    filename: "index.js",
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
