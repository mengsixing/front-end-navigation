// var path = require('path');
// var webpackConfig = require('../../config/base.webpack.config.js');

// webpackConfig.devtool = 'inline-source-map';

// module.exports = function(config) {
// 	config.set({
// 		basePath: '',
// 		frameworks: ['mocha'],
// 		files: ['./index.js'],
// 		preprocessors: {
// 			'index.js': ['webpack', 'sourcemap']
// 		},
// 		reporters: ['spec', 'coverage'], //'coverage'
// 		coverageReporter: {
// 			dir: path.join(__dirname, './coverage'),
// 			reporters: [{ type: 'lcov', subdir: '.' }, { type: 'text-summary' }]
// 		},
// 		colors: true,
// 		browsers: ['ChromeHeadless'],
// 		singleRun: true,
// 		webpack: webpackConfig
// 	});
// };

// This is a karma config file. For more details see
//   http://karma-runner.github.io/0.13/config/configuration-file.html
// we are also using it with karma-webpack
//   https://github.com/webpack/karma-webpack

var webpackConfig = require('../../config/base.webpack.config.js');

webpackConfig.devtool = 'inline-source-map';

module.exports = function(config) {
	config.set({
		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '',

		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['mocha'],

		// list of files / patterns to load in the browser
		files: ['./index.js'],

		// list of files / patterns to exclude
		exclude: [],

		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
			'./index.js': ['webpack']
		},

		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['spec', 'coverage'],

		coverageReporter: {
			dir: './coverage',
			reporters: [{ type: 'lcov', subdir: '.' }, { type: 'text-summary' }]
		},

		// enable / disable colors in the output (reporters and logs)
		colors: true,

		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,

		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,

		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: ['ChromeHeadless'],

		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: true,

		// Concurrency level
		// how many browser should be started simultaneous
		concurrency: Infinity,

		webpack: webpackConfig,
		webpackMiddleware: {
			stats: 'errors-only'
		}
	});
};
