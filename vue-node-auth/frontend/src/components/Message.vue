<template>
  <v-flex sm8 offset-sm2>
    <v-card>
      <v-toolbar dark>
        <v-toolbar-title>Message</v-toolbar-title>
      </v-toolbar>
      <v-card-text>{{ $store.state.currentMessage }}</v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: "Message",
  created() {
    const { id } = this.$route.params;
    this.$store.dispatch("getMessage", id);
  },
};
</script>

<style></style>
