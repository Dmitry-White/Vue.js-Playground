<template>
  <section id="appointments" class="col-12 col-md-10 col-lg-7">
    <div class="list-group list-group-flush">
      <div
        class="list-group-item d-flex align-items-start"
        v-for="item in appointments"
        :key="item.aptId"
      >
        <button
          class="mr-2 btn btn-small btn-danger"
          @click="() => clickHandler(item)"
        >
          <FontAwesomeIcon icon="trash" />
        </button>
        <div class="w-100">
          <div class="d-flex justify-content-between">
            <span
              class="h4 text-primary"
              contenteditable="contenteditable"
              @blur="
                (event) =>
                  editHandler(item.aptId, 'petName', event.target.innerText)
              "
              >{{ item.petName }}</span
            >
            <span class="float-right">{{ formattedDate(item.aptDate) }}</span>
          </div>
          <div class="owner-name">
            <span class="font-weight-bold text-primary mr-1">Owner: </span>
            <span
              contenteditable="contenteditable"
              @blur="
                (event) =>
                  editHandler(item.aptId, 'petOwner', event.target.innerText)
              "
              >{{ item.petOwner }}</span
            >
          </div>
          <div
            contenteditable="contenteditable"
            @blur="
              (event) =>
                editHandler(item.aptId, 'aptNotes', event.target.innerText)
            "
          >
            {{ item.aptNotes }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import moment from "moment";

export default {
  name: "AppointmentList",
  props: ["appointments"],
  components: {
    FontAwesomeIcon,
  },
  methods: {
    formattedDate(date) {
      return moment(new Date(date)).format("MM-DD-YY, h:mm a");
    },
    clickHandler(item) {
      this.$emit("remove", item);
    },
    editHandler(id, field, text) {
      this.$emit("edit", id, field, text);
    },
  },
};
</script>

<style></style>
