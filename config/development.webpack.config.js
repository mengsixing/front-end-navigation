const webpack = require('webpack');

const config = require('./base.webpack.config');

config.mode = 'development';

config.devServer = {
	hot: true
};

config.module.rules = config.module.rules.concat([
	{
		test: /\.css$/,
		use: ['style-loader', 'css-loader']
	},
	{
		test: /\.scss$/,
		use: ['style-loader', 'css-loader', 'sass-loader']
	}
]);

config.plugins.push(new webpack.HotModuleReplacementPlugin());

config.externals = {
	vue: 'Vue',
	'element-ui': 'ELEMENT'
};

module.exports = config;
