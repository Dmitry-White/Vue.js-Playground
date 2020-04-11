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
    async submit() {
      const payload = {
        firstName: this.firstName,
        lastName: this.lastName,
      };

      this.$store.dispatch('createStudent', payload);

      this.firstName = "";
      this.lastName = "";
    },
  },
};
</script>
