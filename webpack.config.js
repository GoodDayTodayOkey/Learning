var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, "src"),
  entry:  "./createApp.tsx",
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      "Lessons": path.resolve('./src/Lessons'),
    }
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
      { test: /\.(ts|tsx)$/, include: path.join(__dirname, "src"), use: 'ts-loader'},
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
