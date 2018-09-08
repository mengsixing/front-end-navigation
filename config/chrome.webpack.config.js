const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const config = require('./base.webpack.config');

config.mode = 'production';

config.output.path = path.resolve(__dirname, '../chrome-extends');

config.resolve.alias['vue'] = 'vue/dist/vue.js';

config.module.rules = config.module.rules.concat([
	{
		test: /\.css$/,
		use: [
			{
				loader: MiniCssExtractPlugin.loader
			},
			'css-loader'
		]
	},
	{
		test: /\.scss$/,
		use: [
			{
				loader: MiniCssExtractPlugin.loader
			},
			'css-loader',
			'sass-loader'
		]
	}
]);

config.plugins.push(
	new MiniCssExtractPlugin({
		filename: '[name]-[contenthash].css',
		chunkFilename: '[id].css'
	})
);


module.exports = config;
