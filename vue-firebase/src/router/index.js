import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Meetings from "../views/Meetings.vue";
import Register from "../views/Register.vue";
import CheckIn from "../views/CheckIn.vue";
import Attendees from "../views/Attendees.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/meetings",
    name: "Metings",
    component: Meetings
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: "/checkin/:userId/:meetingId",
    name: "CheckIn",
    component: CheckIn
  },
  {
    path: "/attendees/:userId/:meetingId",
    name: "Attendees",
    component: Attendees
  },
  {
    path: "*",
    redirect: "/"
  }
];

const router = new VueRouter({
  routes
});

export default router;
