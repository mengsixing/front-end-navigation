const productionConfig = require('./config/production.webpack.config');
const chromeConfig = require('./config/chrome.webpack.config');
const analysisConfig = require('./config/analysis.webpack.config');
const developmentConfig = require('./config/development.webpack.config');

switch (process.env.NODE_ENV) {
  case 'production':
    module.exports = productionConfig;
    break;
  case 'chrome':
    module.exports = chromeConfig;
    break;
  case 'analysis':
    module.exports = analysisConfig;
    break;
  default:
    module.exports = developmentConfig;
    break;
}
