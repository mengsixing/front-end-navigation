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
  externals: {
    vue: 'Vue',
    'element-ui': 'ELEMENT',
  },
  optimization: {
    // 提出webpack运行时代码
    runtimeChunk: {
      name: 'runtime',
    },
  },
});
