<template>
  <v-flex sm8 offset-sm2>
    <v-card>
      <v-toolbar dark>
        <v-toolbar-title>New Message</v-toolbar-title>
      </v-toolbar>
      <v-form @submit.prevent="submit">
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                label="New Message"
                v-model="messageBody"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <v-btn type="submit">submit</v-btn>
      </v-form>
    </v-card>
  </v-flex>
</template>

<script>
import axios from "axios";

export default {
  name: "NewMessage",
  data: () => ({
    messageBody: "",
  }),
  methods: {
    submit() {
      const data = {
        message: this.messageBody,
      };

      axios.post("http://localhost:3000/messages", data);
    },
  },
};
</script>

<style></style>
