const LoadablePlugin = require('@loadable/webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const plugins = [
  new webpack.DefinePlugin({
    __isBrowser__: 'true'
  }),
  new HtmlWebpackPlugin({
    title: 'Learning',
    template: './assets/index.html'
  })
];
// const webpackPlugins = process.env.NODE_ENV === 'SSR' ?  plugins.slice(0,0) : plugins;

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, "src"),
  entry:  "./SSR/client/createApp.tsx",
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      "Lessons": path.resolve('./src/Lessons'),
      "App": path.resolve('./src/App'),
    }
  },
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    compress: true,
    hot: true,
    historyApiFallback: true,
    port: 9000
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: ['babel-loader']},
      { test: /\.s[ac]ss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
      { test: /\.(ts|tsx)$/, include: path.join(__dirname, "src"), use: 'ts-loader'},
      { test: /\.(png|svg|jpg|gif|ico)$/, use: 'file-loader'},
    ]
  },
  plugins:[new LoadablePlugin()],
};
