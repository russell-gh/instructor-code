const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  output: {
    assetModuleFilename: "images/[name][ext][query]" // Cache busting can be done like: "images/[name].[hash][ext][query]" but you need to reconcile, which is easy in react but not static html
  },
  module: {
    rules: [ // this is an array for our different rules, js, .scss, etc.
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset'
      },
      {
        test: /\.css$/, // test by regex
        use: [{
          loader: MiniCSSExtractPlugin.loader,
          options: {
            publicPath: ''
          }
        }, 'css-loader']
      },
      {
        test: /\.js$/, // test by regex
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [new MiniCSSExtractPlugin(), new HtmlWebpackPlugin({
    template: './src/index.html'
  })],
  devServer: {
    contentBase: './dist'
  },
};