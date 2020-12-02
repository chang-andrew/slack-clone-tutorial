import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: {
      id: 0,
      first_name: 'Andrew',
      last_name: 'Chang',
      profile_src: 'https://i.picsum.photos/id/552/200/200.jpg?hmac=99yztwFcmd6Y23V7ViL1mArbh9wwdxbIjS9bhO8xyY8'
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
