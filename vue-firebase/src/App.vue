<template>
  <div id="app">
    <Navigation :user="user" @logout="logout" />
    <router-view class="container" :user="user" @logout="logout" />
  </div>
</template>

<script>
import { auth } from "firebase";

import Navigation from "@/components/Navigation";
import "@/db";

export default {
  name: "App",
  data: () => ({
    user: null
  }),
  methods: {
    logout() {
      auth()
        .signOut()
        .then(() => {
          this.user = null;
          this.$router.push("login");
        })
        .catch(err => console.log(err));
    }
  },
  mounted() {
    auth().onAuthStateChanged(user => {
      this.user = user ? user : null;
    });
  },
  components: {
    Navigation
  }
};
</script>

<style lang="scss">
$primary: #05b2dd;
@import "node_modules/bootstrap/scss/bootstrap";
</style>
