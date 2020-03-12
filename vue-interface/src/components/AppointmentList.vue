<template>
  <section id="appointments">
    <div v-for="(item, index) in appointments" :key="index">
      <h4>{{ item.petName }}</h4>
      <p>{{ item.aptNotes }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "AppointmentList",
  props: ["appointments"],
};
</script>

<style></style>
