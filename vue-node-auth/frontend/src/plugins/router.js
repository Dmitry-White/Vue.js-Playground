import Vue from 'vue';
import VueRouter from 'vue-router';

import Messages from '../components/Messages.vue';
import NewMessage from '../components/NewMessage.vue';

Vue.use(VueRouter);

const routerOptions = {
  routes: [
    { path: '/', component: Messages },
    { path: '/message', component: NewMessage }
  ],
  mode: 'history',
}

const router = new VueRouter(routerOptions);

export default router;