import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const counterModule = {
  namespaced: true,
  state() {
    return {
      counter: 0
    };
  },
  mutations: {
    increment(state) {
      state.counter += 2;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    }
  },
  actions: {
    increment(context) {
      context.commit('increment');
    },
    increase(context, payload) {
      context.commit('increase', payload);
    }
  },
  getters: {
    finalCounter(state) {
      return state.counter * 2;
    },
    normalizedCounter(state, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) return 0;
      if (finalCounter > 100) return 100;
      return finalCounter;
    }
  }
};

const store = createStore({
  modules: {
    counter: counterModule
  },
  state() {
    return {
      isAuth: false
    };
  },
  mutations: {
    login(state) {
      state.isAuth = true;
    },
    logout(state) {
      state.isAuth = false;
    }
  },
  actions: {
    login(context) {
      context.commit('login');
    },
    logout(context) {
      context.commit('logout');
    }
  },
  getters: {
    userIsAuth(state) {
      return state.isAuth;
    }
  }
});

const app = createApp(App);
app.use(store);

app.mount('#app');
