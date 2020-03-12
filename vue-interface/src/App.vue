<template>
  <section id="main-app" class="container">
    <div class="row justify-content-center">
      <AppointmentList :appointments="appointments" />
    </div>
  </section>
</template>

<script>
import axios from "axios";

import AppointmentList from "./components/AppointmentList";

export default {
  name: "MainApp",
  data() {
    return {
      appointments: [],
    };
  },
  components: {
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
