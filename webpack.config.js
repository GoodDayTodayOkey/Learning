var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, "src"),
  entry: './App.tsx',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    compress: true,
    hot: true,
    port: 9000
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: ['babel-loader']},
      { test: /\.css$/, use: ['style-loader', 'css-loader', 'sass-loader']},
      { test: /\.(ts|tsx)$/, use: 'awesome-typescript-loader' },
      { test: /\.(png|svg|jpg|gif|ico)$/, use: 'file-loader'},
    ]
  },
  watch: true,
  plugins:[
  new HtmlWebpackPlugin({
    title: 'Learning',
    template: './assets/index.html'
  })
  ]
};
