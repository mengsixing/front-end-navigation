var path = require('path');
var webpackConfig = require('./config/base.webpack.config.js');
module.exports = function(config) {
	config.set({
		basePath: './test/unit/',
		frameworks: ['mocha'],
		files: ['index.js'],
		preprocessors: {
			// 'index.js': ['webpack', 'coverage']
			'index.js': ['webpack']
		},
		// reporters: ['spec', 'coverage'],
		reporters: ['spec'],
		coverageReporter: {
			dir: path.join(__dirname, './coverage'),
			reporters: [{ type: 'lcov', subdir: '.' }, { type: 'text-summary' }]
		},
		colors: true,
		browsers: ['ChromeHeadless'],
		singleRun: true,
		webpack: webpackConfig
	});
};
