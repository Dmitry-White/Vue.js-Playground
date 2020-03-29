<template>
  <div id="app">
    <Navigation />
    <router-view class="container" :user="user" />
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
  mounted() {
    auth().onAuthStateChanged(user => {
      this.user = user.email;
    })
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
