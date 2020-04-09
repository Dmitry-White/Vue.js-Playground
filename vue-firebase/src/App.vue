<template>
  <div id="app">
    <Navigation :user="user" @logout="logout" />
    <router-view
      class="container"
      :user="user"
      :meetings="meetings"
      :error="error"
      @logout="logout"
      @addMeeting="addMeeting"
      @deleteMeeting="deleteMeeting"
      @checkIn="checkIn"
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
    meetings: [],
    error: ""
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
    },
    checkIn(payload) {
      db.collection("users")
        .doc(payload.userId)
        .collection("meetings")
        .doc(payload.meetingId)
        .get()
        .then(doc =>
          doc.exists
            ? this.addAttendee(payload)
            : (this.error = "Sorry, no such meeting exists")
        );
    },
    addAttendee(payload) {
      db.collection("users")
        .doc(payload.userId)
        .collection("meetings")
        .doc(payload.meetingId)
        .collection("attendees")
        .add({
          displayName: payload.displayName,
          email: payload.email,
          createdAt: firestore.FieldValue.serverTimestamp()
        })
        .then(() =>
          this.$router.push(`/attendees/${payload.userId}/${payload.meetingId}`)
        );
    }
  }
};
</script>

<style lang="scss">
$primary: #05b2dd;
@import "node_modules/bootstrap/scss/bootstrap";
</style>
