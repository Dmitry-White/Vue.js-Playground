import Vue from 'vue';

import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faMinus, faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';

import App from './App.vue';

library.add(faPlus, faMinus, faTrash, faCheck);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
