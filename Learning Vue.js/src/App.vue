<template>
  <div id="app">
    <div class="container p-3">
      <SignUpForm v-show="!submitted" :process="process"></SignUpForm>

      <SignUpMessage v-show="submitted" :process="process">
        Thanks for signing up!
      </SignUpMessage>

      <ImageCard :show-summary="showSummary"></ImageCard>

      <AlbumSummary
        :show-summary="showSummary"
        :summary-handler="summaryHandler"
        :num-songs="numSongs"
      >
      </AlbumSummary>

      <AlbumListing :album="album" :album-handler="albumHandler"></AlbumListing>
    </div>
  </div>
</template>

<script>
import {
  AlbumListing,
  AlbumSummary,
  ImageCard,
  SignUpForm,
  SignUpMessage
} from "./components";

const App = {
  name: "App",
  components: {
    AlbumListing,
    AlbumSummary,
    ImageCard,
    SignUpForm,
    SignUpMessage
  },
  data: () => ({
    submitted: false,
    showSummary: true,
    album: []
  }),
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
      this.showSummary = !this.showSummary;
    },
    albumHandler(album) {
      this.album = album;
    }
  }
};

export default App;
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
[v-cloak] {
  display: none;
}

.fade-leave-to,
.fade-enter {
  opacity: 0;
}

.fade-leave-active,
.fade-enter-active {
  transition: all 0.5s ease;
}
</style>
