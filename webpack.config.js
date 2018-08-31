const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
var StyleLintPlugin = require('stylelint-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
	mode: isProd ? 'production' : 'development',
	entry: './src/main.js',
	devtool: 'cheap-source-map',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'chrome-extends')
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				enforce: 'pre',
				test: /\.(js|vue)$/,
				exclude: /node_modules/,
				loader: 'eslint-loader'
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 10000
						}
					}
				]
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'index.html'
		}),
		new VueLoaderPlugin(),
		new StyleLintPlugin({
			// 正则匹配想要lint监测的文件
			files: ['src/**/*.vue']
		})
	],
	resolve: {
		alias: {
			vue: 'vue/dist/vue.js',
			'~': path.resolve(__dirname, 'src')
		}
	}
};
