const webpack = require('webpack');
const { smart } = require('webpack-merge');

const config = require('./base.webpack.config');

module.exports = smart(config, {
	mode: 'development',
	devServer: {
		hot: true
	},
	plugins: [new webpack.HotModuleReplacementPlugin()],
	externals: {
		vue: 'Vue',
		'element-ui': 'ELEMENT'
	}
});
