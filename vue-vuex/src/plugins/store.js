import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";

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
    },
    updateStudent(state, student) {
      const index = state.students.findIndex(s => s.id == student.id);
      Vue.set(state.students, index, student);
    }
  },
  actions: {
    async getStudents({ commit }) {
      const students = await axios.get("http://localhost:3000/students");
      commit("setStudents", students.data);
    },
    async createStudent({ commit }, payload) {
      const student = await axios.post("http://localhost:3000/students", {
        firstName: payload.firstName,
        lastName: payload.lastName,
      });
      commit('addStudent', student.data);
    },
    async editStudent({ commit }, {id , payload}) {
      const student = await axios.put(`http://localhost:3000/students/${id}`, {
        firstName: payload.firstName,
        lastName: payload.lastName,
      });
      commit('updateStudent', student.data);
    }
  },
  modules: {
  }
};

const store = new Vuex.Store(storeOptions);

export default store;
