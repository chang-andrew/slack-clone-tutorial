import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Chat from '../views/Chat.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Chat',
    component: Chat,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
