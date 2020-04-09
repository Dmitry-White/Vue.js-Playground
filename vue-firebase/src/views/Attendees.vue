<template>
  <div class="container mt-4">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <h1 class="font-weight-light text-center">Attendees</h1>

        <div class="card bg-light mb-4">
          <div class="card-body text-center">
            <div class="input-group input-group-lg">
              <input
                type="text"
                placeholder="Search Attendees"
                class="form-control"
                v-model="searchQuery"
              />
              <div class="input-group-append">
                <button
                  class="btn btn-sm btn-outline-info"
                  title="Pick a random attendee"
                  @click.prevent="handleRandom"
                >
                  <font-awesome-icon icon="random"></font-awesome-icon>
                </button>
                <button
                  class="btn btn-sm btn-outline-info"
                  title="Reset Search"
                  @click.prevent="handleReset"
                >
                  <font-awesome-icon icon="undo"></font-awesome-icon>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div
        class="col-8 col-sm-6 col-md-4 col-lg-3 mb-2 p-0 px-1"
        v-for="item in filteredAttendees"
        :key="item.id"
      >
        <div class="card">
          <div
            class="card-body px-3 py-2 d-flex align-items-center justify-content-center"
          >
            <div class="btn-group pr-2" v-if="user && user.uid === userId">
              <button
                class="btn btn-sm"
                :class="[
                  item.star ? 'text-danger' : '',
                  'btn-outline-secondary'
                ]"
                title="Give user a star"
                @click.prevent="() => handleStar(item.id)"
              >
                <FontAwesomeIcon icon="star" />
              </button>
              <a
                class="btn btn-sm btn-outline-secondary"
                title="Send user an email"
                :href="`mailto:${item.email}`"
              >
                <FontAwesomeIcon icon="envelope" />
              </a>
              <button
                class="btn btn-sm btn-outline-secondary"
                title="Delete Attendee"
                @click.prevent="() => handleDelete(item.id)"
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
      displayAttendees: [],
      userId: this.$route.params.userId,
      meetingId: this.$route.params.meetingId,
      searchQuery: ""
    };
  },
  computed: {
    filteredAttendees() {
      const searchFilter = item =>
        item.displayName.toLowerCase().match(this.searchQuery.toLowerCase());
      return this.displayAttendees.filter(searchFilter);
    }
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
            displayName: doc.data().displayName,
            star: doc.data().star
          });
        });
        this.attendees = this.sortAttendees(snapData);
        this.displayAttendees = this.sortAttendees(snapData);
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
    },
    handleStar(id) {
      if (this.user && this.user.uid === this.userId) {
        const ref = db
          .collection("users")
          .doc(this.userId)
          .collection("meetings")
          .doc(this.meetingId)
          .collection("attendees")
          .doc(id);

        ref.get().then(doc => {
          const star = doc.data().star;
          if (star) {
            ref.update({ star: !star });
          } else {
            ref.update({ star: true });
          }
        });
      }
    },
    handleDelete(id) {
      if (this.user && this.user.uid === this.userId) {
        db.collection("users")
          .doc(this.userId)
          .collection("meetings")
          .doc(this.meetingId)
          .collection("attendees")
          .doc(id)
          .delete();
      }
    },
    handleRandom() {
      const randomAttendee = Math.floor(Math.random() * this.attendees.length);
      this.displayAttendees = [this.attendees[randomAttendee]];
    },
    handleReset() {
      console.log("Reset");
    }
  }
};
</script>
