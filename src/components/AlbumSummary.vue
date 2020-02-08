<template>
  <div>
    <transition name="fade">
      <h2 class="mt-5" v-cloak v-if="numSongs && showSummary">
        Songs:
        <span class="badge badge-secondary">{{ numSongs }}</span>
      </h2>
    </transition>
    <CustomButton type="button" extraClass="btn-info" :handler="summaryHandler">
      Summary
    </CustomButton>
  </div>
</template>

<script>
import CustomButton from "./CustomButton";

const AlbumSummary = {
  props: ["showSummary", "summaryHandler", "numSongs"],
  components: { CustomButton }
};

export default AlbumSummary;
</script>
