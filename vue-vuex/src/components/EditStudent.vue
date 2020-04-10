<template>
  <div>
    <v-flex sm8 offset-sm2 v-if="isLoaded">
      <v-card>
        <v-toolbar dark>
          <v-toolbar-title>Edit Student</v-toolbar-title>
        </v-toolbar>

        <v-container class="text-center" v-if="!isLoaded">
          <v-progress-circular
            :size="70"
            :width="7"
            color="gray"
            indeterminate
          />
        </v-container>

        <v-form v-if="isLoaded">
          <v-container>
            <v-layout>
              <v-flex xs12 md4>
                <v-text-field
                  v-model="student($route.params.id).firstName"
                  label="First Name"
                  required
                />
                <v-text-field
                  v-model="student($route.params.id).lastName"
                  label="Last Name"
                  required
                />
              </v-flex>
            </v-layout>
          </v-container>
          <v-btn @click="submit">submit</v-btn>
        </v-form>
      </v-card>
    </v-flex>
    <br />
    <Students />
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from 'vuex';

import Students from "./Students";

export default {
  name: "EditStudent",
  components: {
    Students,
  },
  computed: {
    ...mapGetters({
      isLoaded: 'isLoaded',
      student: 'findStudent'
    })
  },
  methods: {
    async submit() {
      axios.put(`http://localhost:3000/students/${this.$route.params.id}`, {
        firstName: this.student.firstName,
        lastName: this.student.lastName,
      });
    },
  },
};
</script>
