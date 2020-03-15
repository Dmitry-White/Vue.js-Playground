<template>
  <div>
    <h4 class="display-1">Messages</h4>

    <v-list>
      <v-list-item v-for="(message, i) in messages" :key="i" @click="() => {}">
        <v-list-item-content>
          <v-list-item-title v-text="message"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  name: "Messages",
  data() {
    return {
      messages: ["hello", "hi"],
    };
  },
};
</script>

<style></style>
