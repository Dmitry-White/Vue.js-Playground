<template>
  <section id="main-app" class="container">
    <h3>{{ title }}</h3>
    <FontAwesomeIcon icon="plus" class="mr-2" />Add Appointment

    <AppointmentList :appointments="appointments" />
  </section>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import axios from "axios";

import AppointmentList from "./components/AppointmentList";

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
    AppointmentList,
  },
  mounted() {
    axios
      .get("./data/appointments.json")
      .then((res) => (this.appointments = res.data))
      .catch((err) => console.error(err));
  },
};
</script>
