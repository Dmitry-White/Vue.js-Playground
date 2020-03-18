<template>
  <v-flex sm8 offset-sm2>
    <v-card>
      <v-toolbar dark>
        <v-toolbar-title>Messages</v-toolbar-title>
      </v-toolbar>

      <v-list>
        <v-list-item
          v-for="(message, i) in store.state.messages"
          :key="i"
          @click="() => {}"
        >
          <v-list-item-content>
            <v-list-item-title v-text="message"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-flex>
</template>

<script>
import axios from "axios";

import store from "../store";

export default {
  name: "Messages",
  data: () => ({
    store,
  }),
  async created() {
    const response = await axios.get("http://localhost:3000/messages");
    store.state.messages = response.data;
  },
};
</script>

<style></style>
