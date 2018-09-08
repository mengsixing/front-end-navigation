const webpack = require('webpack');

const config = require('./base.webpack.config');

config.mode = 'development';

config.devServer = {
	hot: true
};

config.plugins.push(
	new webpack.HotModuleReplacementPlugin()
);

config.externals = {
	vue: 'Vue',
	'element-ui': 'ELEMENT'
};

module.exports = config;
