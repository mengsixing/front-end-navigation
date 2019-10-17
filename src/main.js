import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App.vue';

/* eslint-disable global-require */
if (process.env.NODE_ENV === 'chrome') {
  require('element-ui/lib/theme-chalk/index.css');
}

Vue.use(ElementUI);

new Vue({
  render: (h) => h(App),
}).$mount('#root');
