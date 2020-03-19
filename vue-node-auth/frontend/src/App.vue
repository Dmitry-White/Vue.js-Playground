<template>
  <v-app>
    <v-app-bar app>
      <v-btn depressed>Messages</v-btn>
      <v-spacer />
      <v-btn>Login</v-btn>
    </v-app-bar>

    <v-content>
      <br />
      <NewMessage />
      <br />
      <Messages />
    </v-content>
  </v-app>
</template>

<script>
import Messages from "./components/Messages";
import NewMessage from "./components/NewMessage";

export default {
  name: "App",

  components: {
    Messages,
    NewMessage,
  },

  data: () => ({
    //
  }),
};
</script>
