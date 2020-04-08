<template>
  <div class="container mt-4">
    <div class="row justify-content-center">
      <div
        class="col-8 col-sm-6 col-md-4 col-lg-3 mb-2 p-0 px-1"
        v-for="item in attendees"
        :key="item.id"
      >
        <div class="card">
          <div
            class="card-body px-3 py-2 d-flex align-items-center justify-content-center"
          >
            <div class="btn-group pr-2">
              <button
                class="btn btn-sm btn-outline-secondary"
                title="Give user a star"
              >
                <FontAwesomeIcon icon="star" />
              </button>
              <a
                class="btn btn-sm btn-outline-secondary"
                title="Send user an email"
              >
                <FontAwesomeIcon icon="envelope" />
              </a>
              <button
                class="btn btn-sm btn-outline-secondary"
                title="Delete Attendee"
              >
                <FontAwesomeIcon icon="trash" />
              </button>
            </div>
            <div>{{ item.displayName }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import db from "@/db";

export default {
  name: "Attendees",
  props: ["user"],
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      attendees: [],
      userId: this.$route.params.userId,
      meetingId: this.$route.params.meetingId
    };
  },
  mounted() {
    db.collection("users")
      .doc(this.userId)
      .collection("meetings")
      .doc(this.meetingId)
      .collection("attendees")
      .onSnapshot(snapshot => {
        const snapData = [];
        snapshot.forEach(doc => {
          snapData.push({
            id: doc.id,
            email: doc.data().email,
            displayName: doc.data().displayName
          });
        });
        this.attendees = this.sortAttendees(snapData);
      });
  },
  methods: {
    sortAttendees(list) {
      const sortedList = list.sort((a, b) => {
        return a.displayName.toLowerCase() < b.displayName.toLowerCase()
          ? -1
          : 1;
      });
      return sortedList;
    }
  }
};
</script>
