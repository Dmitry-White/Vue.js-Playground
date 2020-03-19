import Vue from 'vue';
import VueRouter from 'vue-router';

import Messages from '../components/Messages.vue';
import NewMessage from '../components/NewMessage.vue';
import Message from '../components/Message.vue';

Vue.use(VueRouter);

const routerOptions = {
  routes: [
    { path: '/', component: Messages },
    { path: '/new-message', component: NewMessage },
    { path: '/message', component: Message }
  ],
  mode: 'history',
}

const router = new VueRouter(routerOptions);

export default router;