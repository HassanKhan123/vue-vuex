<template>
  <base-container title="Vuex" v-if="userIsAuth">
    <TheCounter></TheCounter>
    <button @click="addOne">Add 10</button>
    <change-counter></change-counter>
  </base-container>
  <base-container title="Auth">
    <UserAuth></UserAuth>
  </base-container>
</template>

<script>
import { mapGetters } from 'vuex';

import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from '@/components/ChangeCounter.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    UserAuth,
  },
  methods: {
    addOne() {
      // this.$store.commit('increase', { value: 10 });
      this.$store.dispatch({
        type: 'counter/increase',
        value: 10,
      });
    },
  },
  computed: {
    ...mapGetters(['userIsAuth']),
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>