import { createStore } from 'vuex';

import rootMutations from './mutations';
import rootActions from './actions';
import rootGetters from './getters';
import counterModule from './counter';

export const store = createStore({
  modules: {
    counter: counterModule
  },
  state() {
    return {
      isAuth: false
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters
});
