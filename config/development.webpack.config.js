const webpack = require('webpack');
const { merge } = require('webpack-merge');

const config = require('./base.webpack.config');

module.exports = merge(config, {
  mode: 'development',
  entry: {
    main: './src/main.js',
  },
  devServer: {
    hot: true,
    host: '0.0.0.0',
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  externals: {
    vue: 'Vue',
    'element-ui': 'ELEMENT',
  },
});
