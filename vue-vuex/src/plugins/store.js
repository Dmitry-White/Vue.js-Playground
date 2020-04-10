import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const storeOptions = {
  state: {
    students: []
  },
  getters: {
    students: (state) => state.students.map(student => ({
      ...student,
      fullName: `${student.firstName} ${student.lastName}`
    }))
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
