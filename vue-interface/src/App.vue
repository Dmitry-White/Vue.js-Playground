<template>
  <section id="main-app" class="container">
    <h3>{{ title }}</h3>
    <FontAwesomeIcon icon="plus" class="mr-2" />Add Appointment

    <div v-for="(item, index) in appointments" :key="index">
      <h4>{{ item.petName }}</h4>
      <p>{{ item.aptNotes }}</p>
    </div>
  </section>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import axios from "axios";

export default {
  name: "MainApp",
  data() {
    return {
      title: "Appointment List",
      appointments: [],
    };
  },
  components: {
    FontAwesomeIcon,
  },
  mounted() {
    axios
      .get("./data/appointments.json")
      .then((res) => this.appointments = res.data)
      .catch((err) => console.error(err));
  },
};
</script>
