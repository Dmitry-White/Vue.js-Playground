<template>
  <div>
    <h4>Messages</h4>
    <ul v-for="(message, i) in messages" :key="i">
      <li>{{ message }}</li>
    </ul>
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
