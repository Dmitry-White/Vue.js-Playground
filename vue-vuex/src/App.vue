<template>
  <v-app>
    <v-app-bar app>
      <v-btn text to="/">Students List</v-btn>
      <v-btn text to="/NewStudent">New Student</v-btn>
    </v-app-bar>
    <v-content>
      <br />
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import axios from "axios";

import NewStudent from "./components/NewStudent";
import Students from "./components/Students";
import EditStudent from "./components/EditStudent";

export default {
  name: "App",
  components: {
    NewStudent,
    Students,
    EditStudent,
  },
  async created() {
    const students = (await axios.get("http://localhost:3000/students")).data;
    this.$store.commit("setStudents", students);
  },
};
</script>
