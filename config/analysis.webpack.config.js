const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const config = require('./production.webpack.config');

config.plugins.push(new BundleAnalyzerPlugin());

module.exports = config;
