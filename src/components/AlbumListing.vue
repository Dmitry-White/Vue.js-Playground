<template>
  <ul class="list-group mt-2" v-cloak>
    <li
      v-for="song in album"
      :class="{ 'list-group-item-secondary': isOdd(song.id) }"
      class="list-group-item"
      :key="song.id"
    >
      {{ song.title }}
      <button
        @click="removeSong(song.id)"
        type="button"
        class="close"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </li>
  </ul>
</template>

<script>
import axios from "axios";

const AlbumListing = {
  props: ["album", "albumHandler"],
  created() {
    this.fetchList();
  },
  methods: {
    fetchList() {
      axios
        .get("https://jsonplaceholder.typicode.com/albums")
        .then(data => {
          const album = data.data.slice(0, 10);
          this.albumHandler(album);
        })
        .catch(err => {
          console.log(err);
          this.albumHandler([]);
        });
    },
    removeSong(index) {
      const updatedAlbum = this.album.filter(song => song.id !== index);
      this.albumHandler(updatedAlbum);
    },
    isOdd(index) {
      return index % 2;
    }
  }
};

export default AlbumListing;
</script>
