const path = require('path');
const webpackConfig = require('../../config/base.webpack.config.js');

webpackConfig.devtool = 'inline-source-map';
delete webpackConfig.context;
delete webpackConfig.entry;
delete webpackConfig.output;

module.exports = (config) => {
  config.set({
    frameworks: ['mocha', 'webpack'],
    files: ['./index.js'],
    preprocessors: {
      'index.js': ['webpack', 'sourcemap'],
    },
    reporters: ['spec', 'coverage'], // 'coverage'
    coverageReporter: {
      dir: path.join(__dirname, './coverage'),
      reporters: [{ type: 'lcov', subdir: '.' }, { type: 'text-summary' }],
    },
    colors: true,
    browsers: ['ChromeHeadless'],
    singleRun: true,
    webpack: webpackConfig,
  });
};
