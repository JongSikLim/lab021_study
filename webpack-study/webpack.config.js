// 설정파일
const nodeExternals = require('webpack-node-externals')
var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  target: 'node',
  entry:'./src',
  output:{
    path: '/dist',
    filename: 'bundle.js'
  },
  externals: [nodeExternals()],
  plugins: [
    new htmlWebpackPlugin({
        template: path.join(__dirname, './src/index.html'),
        inject: false,
        filename: path.join(__dirname, './dist/index.html')
    })
  ],
}