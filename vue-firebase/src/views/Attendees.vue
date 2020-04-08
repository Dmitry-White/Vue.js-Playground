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
            <div>{{ item.displayName }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from "@/db";

export default {
  name: "Attendees",
  data: () => ({
    attendees: []
  }),
  mounted() {
    const payload = {
      meetingId: this.$route.params.meetingId,
      userId: this.$route.params.userId
    };

    db.collection("users")
      .doc(payload.userId)
      .collection("meetings")
      .doc(payload.meetingId)
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
