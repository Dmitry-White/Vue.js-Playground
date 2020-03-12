<template>
  <section id="main-app" class="container">
    <div class="row justify-content-center">
      <AppointmentList
        :appointments="appointments"
        @remove="removeItem"
        @edit="editItem"
      />
    </div>
  </section>
</template>

<script>
import axios from "axios";
import _ from "lodash";

import AppointmentList from "./components/AppointmentList";

export default {
  name: "MainApp",
  data() {
    return {
      appointments: [],
      aptIndex: 0,
    };
  },
  components: {
    AppointmentList,
  },
  mounted() {
    axios
      .get("./data/appointments.json")
      .then(
        (res) =>
          (this.appointments = res.data.map((item) => {
            item.aptId = this.aptIndex;
            this.aptIndex++;
            return item;
          }))
      )
      .catch((err) => console.error(err));
  },
  methods: {
    removeItem(item) {
      this.appointments = _.without(this.appointments, item);
    },
    editItem(id, field, text) {
      console.log(id, field, text);
      const aptIndex = _.findIndex(this.appointments, {
        aptId: id,
      });
      console.log(aptIndex);
      this.appointments[aptIndex][field] = text;
    },
  },
};
</script>
