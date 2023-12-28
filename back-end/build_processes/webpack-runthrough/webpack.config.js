const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  devServer: {
    contentBase: "./dist",
  },

  module: {
    rules: [
      // this is an array for our different rules, js, .scss, etc.
      {
        test: /\.js$/, // test by regex
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  devtool: "source-map",

  plugins: [new MiniCSSExtractPlugin()],
};
