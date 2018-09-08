switch (process.env.NODE_ENV) {
case 'production':
	module.exports = require('./config/production.webpack.config');
	break;
case 'chrome':
	module.exports = require('./config/chrome.webpack.config');
	break;
case 'analysis':
	module.exports = require('./config/analysis.webpack.config');
	break;
default:
	module.exports = require('./config/development.webpack.config');
	break;
}
