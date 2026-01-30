const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');
const DistPath = path.resolve(__dirname, '../dist');

module.exports = {
  context: path.resolve(__dirname, '../src'),
  entry: './index.js',
  output: {
    filename: '[name].[contenthash].js',
    path: DistPath,
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: '../files/index.html'
    }),
    new CopyPlugin({
      patterns: [
        {
          from: '../files/assets',
          to: path.resolve(DistPath, 'files/assets')
        }, {
          from: '../files/fonts',
          to: path.resolve(DistPath, 'files/fonts')
        }]
    }),
    new ESLintPlugin({
      files: 'src/**/*.js'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource'
      }
    ]
  }
};
