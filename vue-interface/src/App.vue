<template>
  <section id="main-app" class="container">
    <div class="row justify-content-center">
      <AddAppointment @submit="addItem" />
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
import AddAppointment from "./components/AddAppointment";

export default {
  name: "MainApp",
  components: {
    AppointmentList,
    AddAppointment,
  },
  data() {
    return {
      appointments: [],
      aptIndex: 0,
    };
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
    addItem(item) {
      this.appointments.push({
        ...item,
        aptId: this.aptIndex,
      });
      this.aptIndex++;
    },
  },
};
</script>
