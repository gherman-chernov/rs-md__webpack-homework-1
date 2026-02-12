const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');
const { resolve } = require("dns");
const DistPath = path.resolve(__dirname, '../dist');

module.exports = {
  context: path.resolve(__dirname, '../src'),
  entry: './index.ts',
  output: {
    filename: '[name].[contenthash].js',
    path: DistPath,
    clean: true
  },
  resolve: {
    extensions: ['.ts', '.js']
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
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ]
  }
};
