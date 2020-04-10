import Vue from 'vue'

import { store, router, vuetify } from './plugins';
import App from './App.vue';

Vue.config.productionTip = false

const app = new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app');

window.__app__ = app;