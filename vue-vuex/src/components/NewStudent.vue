<template>
  <div>
    <v-flex sm8 offset-sm2>
      <v-card>
        <v-toolbar dark>
          <v-toolbar-title>New Student</v-toolbar-title>
        </v-toolbar>
        <v-form @submit.prevent="submit">
          <v-container>
            <v-layout>
              <v-flex xs12 md4>
                <v-text-field v-model="firstName" label="First Name" required />
                <v-text-field v-model="lastName" label="Last Name" required />
              </v-flex>
            </v-layout>
          </v-container>
          <v-btn type="submit">submit</v-btn>
        </v-form>
      </v-card>
    </v-flex>
    <br />
    <Students />
  </div>
</template>

<script>
import axios from "axios";
import { mapMutations } from 'vuex';

import Students from "./Students";

export default {
  name: "NewStudent",
  components: {
    Students,
  },
  data: () => ({
    firstName: "",
    lastName: "",
  }),
  methods: {
    ...mapMutations([
      'addStudent',
    ]),
    async submit() {
      const student = await axios.post("http://localhost:3000/students", {
        firstName: this.firstName,
        lastName: this.lastName,
      });
      this.addStudent(student.data);

      this.firstName = "";
      this.lastName = "";
    },
  },
};
</script>
