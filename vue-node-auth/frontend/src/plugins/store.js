import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const storeOptions = {
  state: {
    messages: [],
  },
  mutations: {
    setMessages(state, messages) {
      state.messages = messages;
    },
    addMessage(state, message) {
      state.messages.push(message);
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
    }
  }
};

const store = new Vuex.Store(storeOptions);

export default store;