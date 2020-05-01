import Vue from 'vue';
import VueRouter from 'vue-router';

import NewStudent from "../components/NewStudent";
import Students from "../components/Students";
import EditStudent from "../components/EditStudent";

Vue.use(VueRouter);

const routerOptions = {
  routes: [
    { path: "/", component: Students },
    { path: "/NewStudent", component: NewStudent },
    { path: "/EditStudent/:id", component: EditStudent },
  ],
  mode: 'history'
}

const router = new VueRouter(routerOptions);

export default router;