import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const storeOptions = {
  state: {
    messages: [],
    currentMessage: null,
    token: localStorage.getItem('token') || '',
  },
  mutations: {
    setMessages(state, messages) {
      state.messages = messages;
    },
    addMessage(state, message) {
      state.messages.push(message);
    },
    setMessage(state, message) {
      state.currentMessage = message;
    },
    setAuth(state, token) {
      state.token = token;
    },
    removeAuth(state) {
      state.token = '';
    }
  },
  actions: {
    async getMessages({ commit }) {
      try {
        const response = await axios.get("http://localhost:3000/messages");
        commit("setMessages", response.data);
      } catch (error) {
        console.log(error);
      }
    },
    async newMessage({ commit }, data) {
      try {
        const response = await axios.post(
          "http://localhost:3000/messages",
          data
        );
        const message = response.data;
        commit("addMessage", message);
      } catch (error) {
        console.log(error);
      }
    },
    async getMessage({ commit }, id) {
      try {
        const response = await axios.get(`http://localhost:3000/messages/${id}`);
        commit("setMessage", response.data);
      } catch (error) {
        console.log(error);
      }
    },
    async register({ commit }, data) {
      try {
        const response = await axios.post(
          "http://localhost:3000/register",
          data
        );
        const token = response.data;
        localStorage.setItem('token', token);
        axios.defaults.headers['Authorization'] = token;
        commit('setAuth', token);
      } catch (error) {
        console.log(error);
      }
    },
    async login({ commit }, data) {
      try {
        const response = await axios.post(
          "http://localhost:3000/login",
          data
        );
        const token = response.data;
        localStorage.setItem('token', token);
        axios.defaults.headers['Authorization'] = token;
        commit('setAuth', token);
      } catch (error) {
        console.log(error);
      }
    },
    logout({ commit }) {
      localStorage.removeItem('token');
      commit('removeAuth');
    }
  }
};

const store = new Vuex.Store(storeOptions);

export default store;