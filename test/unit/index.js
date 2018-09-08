import Vue from 'vue';
import ElementUI from 'element-ui';
Vue.use(ElementUI);

const testsContext = require.context('./specs', true, /\.spec$/);


testsContext.keys().forEach(testsContext);
