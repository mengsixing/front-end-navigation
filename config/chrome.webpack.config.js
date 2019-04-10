const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { smart } = require('webpack-merge');
const config = require('./base.webpack.config');


module.exports = smart(config, {
  mode: 'production',
  entry: {
    main: './src/main.js',
  },
  output: {
    filename: '[name]-[contenthash:8].js',
    path: path.resolve(__dirname, '../chrome-extends'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]-[contenthash:8].css',
      chunkFilename: '[id].css',
    }),
  ],
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
    },
  },
});
