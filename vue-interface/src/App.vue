<template>
  <section id="main-app" class="container">
    <div class="row justify-content-center">
      <AddAppointment @submit="addItem" />
      <SearchAppointments
        @search="searchItems"
        :filterDir="filterDir"
        :filterKey="filterKey"
      />
      <AppointmentList
        :appointments="filteredApts"
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
import SearchAppointments from "./components/SearchAppointments";

export default {
  name: "MainApp",
  components: {
    AppointmentList,
    AddAppointment,
    SearchAppointments,
  },
  data() {
    return {
      appointments: [],
      aptIndex: 0,
      filterKey: "petName",
      filterDir: "asc",
      searchTerms: "",
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
  computed: {
    searchedApts() {
      const term = this.searchTerms.toLowerCase();
      return this.appointments.filter(
        ({ petName, petOwner, aptNotes }) =>
          petName.toLowerCase().match(term) ||
          petOwner.toLowerCase().match(term) ||
          aptNotes.toLowerCase().match(term)
      );
    },
    filteredApts() {
      return _.orderBy(
        this.searchedApts,
        (item) => item[this.filterKey].toLowerCase(),
        this.filterDir
      );
    },
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
    searchItems(terms) {
      this.searchTerms = terms;
    },
  },
};
</script>
