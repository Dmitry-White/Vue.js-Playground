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
    })),
    findStudent: (state) => (id) => state.students.find(student => student.id == id),
    isLoaded: (state) => !!state.students.length
  },
  mutations: {
    setStudents(state, students) {
      state.students = students;
    },
    addStudent(state, student) {
      state.students.push(student);
    }
  },
  actions: {
  },
  modules: {
  }
};

const store = new Vuex.Store(storeOptions);

export default store;
