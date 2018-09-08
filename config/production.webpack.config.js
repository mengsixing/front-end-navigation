const config = require('./base.webpack.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

config.mode = 'production';

config.externals = {
	vue: 'Vue',
	'element-ui': 'ELEMENT'
};

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
