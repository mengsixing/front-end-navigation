const path = require('path');

const config = require('./base.webpack.config');

config.mode = 'production';

config.output.path = path.resolve(__dirname, '../chrome-extends');

config.resolve.alias['vue'] = 'vue/dist/vue.js';

module.exports = config;
