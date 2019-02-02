import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

Vue.config.productionTip = false;

const testsContext = require.context('./specs', true, /\.spec$/);

testsContext.keys().forEach(testsContext);

const srcContext = require.context('../../src/components', true, /\.vue$/);
srcContext.keys().forEach(srcContext);
