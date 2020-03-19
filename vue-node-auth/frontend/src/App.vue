<template>
  <v-app>
    <v-app-bar app>
      <v-btn depressed to='/'>Messages</v-btn>
      <v-btn depressed to='/message'>New Message</v-btn>
      <v-spacer />
      <v-btn>Login</v-btn>
    </v-app-bar>

    <v-content>
      <br />
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    //
  }),
};
</script>
