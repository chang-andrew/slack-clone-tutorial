import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Chat from '../views/Chat.vue';
import Test from '../views/Test.vue';
import Test2 from '../views/Test2.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Chat',
    component: Chat,
  },
  {
    path: '/test',
    name: 'Test',
    component: Test,
  },
  {
    path: '/test2',
    name: 'Test2',
    component: Test2,
  }
];

const router = new VueRouter({
  routes,
});

export default router;
