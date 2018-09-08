const config = require('./production.webpack.config');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
	.BundleAnalyzerPlugin;

config.plugins.push(new BundleAnalyzerPlugin());

module.exports = config;
