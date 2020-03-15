<template>
  <v-app>
    <v-app-bar app> </v-app-bar>

    <v-content>
      <Messages />
    </v-content>
  </v-app>
</template>

<script>
import Messages from "./components/Messages";

export default {
  name: "App",

  components: {
    Messages,
  },

  data: () => ({
    //
  }),
};
</script>
