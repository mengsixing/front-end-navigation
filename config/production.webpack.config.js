const config = require('./base.webpack.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { smart } = require('webpack-merge');

module.exports = smart(config, {
	mode: 'production',
	output: {
		filename: 'bundle-[contenthash:8].js'
	},
	module: {
		rules: [
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
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name]-[contenthash:8].css',
			chunkFilename: '[id].css'
		})
	],
	externals: {
		vue: 'Vue',
		'element-ui': 'ELEMENT'
	}
});
