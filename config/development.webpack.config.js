const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

var config = require('./base.webpack.config');

config.mode = 'development';

config.devServer = {
	hot: true
};

config.plugins.push(
	new HtmlWebpackPlugin({
		template: path.resolve(__dirname, 'template/index.html'),
		favicon: path.resolve(__dirname, 'template/favicon.ico')
	}),
	new webpack.HotModuleReplacementPlugin()
);

config.externals = {
	vue: 'Vue',
	'element-ui': 'ELEMENT'
};

module.exports = config;
