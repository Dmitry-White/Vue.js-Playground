<template>
  <v-flex sm8 offset-sm2>
    <v-card>
      <v-toolbar dark>
        <v-toolbar-title>Register</v-toolbar-title>
      </v-toolbar>
      <v-form @submit.prevent="register">
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                label="User Name"
                v-model="username"
                required
              ></v-text-field>
              <v-text-field
                label="Password"
                v-model="password"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <v-btn type="submit">register</v-btn>
      </v-form>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: "Register",
  data: () => ({
    username: "",
    password: "",
  }),
  methods: {
    register() {
      const data = {
        username: this.username,
        password: this.password,
      };

      this.$store.dispatch("register", data);
    },
  },
};
</script>

<style></style>
