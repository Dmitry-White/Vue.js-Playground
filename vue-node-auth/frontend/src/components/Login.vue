<template>
  <v-flex sm8 offset-sm2>
    <v-card>
      <v-toolbar dark>
        <v-toolbar-title>Login</v-toolbar-title>
      </v-toolbar>
      <v-form @submit.prevent="login">
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
        <v-btn type="submit">Login</v-btn>
      </v-form>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: "Login",
  data: () => ({
    username: "",
    password: "",
  }),
  methods: {
    login() {
      const data = {
        username: this.username,
        password: this.password,
      };

      this.$store.dispatch("login", data);
    },
  },
};
</script>

<style></style>
