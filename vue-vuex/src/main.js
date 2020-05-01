import Vue from 'vue'
import Veutify from 'vuetify'

import router from './plugins/router';
import App from './App.vue'

import 'vuetify/dist/vuetify.min.css'

Vue.use(Veutify);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');