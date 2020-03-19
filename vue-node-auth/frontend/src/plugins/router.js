import Vue from 'vue';
import VueRouter from 'vue-router';

import Messages from '../components/Messages.vue';

Vue.use(VueRouter);

const routerOptions = {
  routes: [
    { path: '/', component: Messages }
  ],
}

const router = new VueRouter(routerOptions);

export default router;