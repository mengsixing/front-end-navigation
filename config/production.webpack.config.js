const config = require('./base.webpack.config');

config.mode = 'production';

config.externals = {
	vue: 'Vue',
	'element-ui': 'ELEMENT'
};

module.exports = config;
