<template>
  <div id="app">
    <Navigation :user="user" @logout="logout" />
    <router-view
      class="container"
      :user="user"
      :meetings="meetings"
      @logout="logout"
      @addMeeting="addMeeting"
      @deleteMeeting="deleteMeeting"
    />
  </div>
</template>

<script>
import { auth, firestore } from "firebase";

import Navigation from "@/components/Navigation";
import db from "@/db";

export default {
  name: "App",
  components: {
    Navigation
  },
  data: () => ({
    user: null,
    meetings: []
  }),
  mounted() {
    this.checkUser();
  },
  methods: {
    checkUser() {
      auth().onAuthStateChanged(user => {
        if (user) {
          this.user = user;
          this.getMeetings();
        } else {
          this.user = null;
        }
      });
    },
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
    },
    deleteMeeting(payload) {
      db.collection("users")
        .doc(this.user.uid)
        .collection("meetings")
        .doc(payload)
        .delete();
    },
    getMeetings() {
      db.collection("users")
        .doc(this.user.uid)
        .collection("meetings")
        .onSnapshot(snapshot => {
          const snapData = [];
          snapshot.forEach(doc => {
            snapData.push({
              id: doc.id,
              name: doc.data().name
            });
          });
          this.meetings = this.sortMeetings(snapData);
        });
    },
    sortMeetings(list) {
      const sortedList = list.sort((a, b) => {
        return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
      });
      return sortedList;
    }
  }
};
</script>

<style lang="scss">
$primary: #05b2dd;
@import "node_modules/bootstrap/scss/bootstrap";
</style>
