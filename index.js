const app = new Vue({
  el: '#app',
  data: {
    submitted: false,
    showSummary: true,
    album: [],
  },
  computed: {
    numSongs() {
      return this.album.length;
    }
  },
  methods: {
    process(e) {
      e.preventDefault();
      this.submitted = true;
    },
    summaryHandler() {
      this.showSummary = !this.showSummary
    },
    albumHandler(album) {
      this.album = album;
    }
  }
});