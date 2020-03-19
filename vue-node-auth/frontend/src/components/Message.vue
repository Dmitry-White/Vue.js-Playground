<template>
  <v-flex sm8 offset-sm2>
    <v-card>
      <v-toolbar dark>
        <v-toolbar-title>Message</v-toolbar-title>
      </v-toolbar>
      {{ messageBody }}
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: "Message",
  data: () => ({
    messageBody: "Hi",
  }),
};
</script>

<style></style>
