<template>
  <div id="app">
    <Navigation :user="user" @logout="logout" />
    <router-view
      class="container"
      :user="user"
      @logout="logout"
      @addMeeting="addMeeting"
    />
  </div>
</template>

<script>
import { auth, firestore } from "firebase";

import Navigation from "@/components/Navigation";
import db from "@/db";

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
    },
    addMeeting(payload) {
      db.collection("users")
        .doc(this.user.uid)
        .collection("meetings")
        .add({
          name: payload,
          createdAt: firestore.FieldValue.serverTimestamp()
        });
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
