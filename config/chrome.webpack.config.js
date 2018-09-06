const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var config = require('./base.webpack.config');

config.mode = 'production';

config.output.path = path.resolve(__dirname, '../chrome-extends');

config.resolve.alias['vue'] = 'vue/dist/vue.js';

config.plugins.push(
	new HtmlWebpackPlugin({
		template: path.resolve(__dirname, 'template/chrome.html')
	})
);

module.exports = config;
