import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';

import module from './modules'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
  	module:module,
  },
  getters,
});

export default store
