import Vue from 'vue';
import VueRouter from 'vue-router';

import Messages from '../components/Messages.vue';
import NewMessage from '../components/NewMessage.vue';
import Message from '../components/Message.vue';
import Register from '../components/Register.vue';

Vue.use(VueRouter);

const routerOptions = {
  routes: [
    { path: '/', component: Messages },
    { path: '/new-message', component: NewMessage },
    { path: '/message/:id', component: Message },
    { path: '/register', component: Register },
  ],
  mode: 'history',
}

const router = new VueRouter(routerOptions);

export default router;