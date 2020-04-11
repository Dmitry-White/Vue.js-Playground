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
    <v-snackbar v-model="$store.state.isError">{{
      $store.state.error
    }}</v-snackbar>
  </v-app>
</template>

<script>
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
    this.$store.dispatch("getStudents");
  },
};
</script>
