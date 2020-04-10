import Vue from 'vue'

import { router, vuetify } from './plugins';

Vue.use(Veutify);

Vue.config.productionTip = false

const app = new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app');

window.__app__ = app;