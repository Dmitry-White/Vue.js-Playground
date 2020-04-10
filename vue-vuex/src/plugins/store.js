import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const storeOptions = {
  state: {
    students: []
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
};

const store = new Vuex.Store(storeOptions);

export default store;
