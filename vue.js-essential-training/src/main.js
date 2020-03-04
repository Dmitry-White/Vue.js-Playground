import Vue from 'vue';
import bootstrap from 'bootstrap';
import css from 'bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import animate from 'animate.css';

import { faShoppingCart, faDollarSign } from '@fortawesome/free-solid-svg-icons';

import App from './App.vue';

library.add(faShoppingCart, faDollarSign);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
