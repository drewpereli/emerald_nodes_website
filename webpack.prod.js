const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  plugins: [new FaviconsWebpackPlugin('./src/images/favicon.jpg')],
});
