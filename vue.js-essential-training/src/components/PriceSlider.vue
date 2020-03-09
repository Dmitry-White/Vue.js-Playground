<template>
  <transition name="fade">
    <div v-if="sliderStatus">
      <section id="max-block" class="align-items-center" :class="sliderState">
        <label for="formMax" :class="labelArr">Max</label>
        <input
          type="text"
          id="formMax"
          class="form-control mx-2"
          :style="{
            width: `${inputWidth}px`,
            'text-align': 'center'
          }"
          v-model="maxAmount"
          @change="$emit('update:maximum', maxAmount)"
        />
        <input
          type="range"
          class="custom-range"
          min="0"
          max="200"
          v-model="maxAmount"
          @input="$emit('update:maximum', maxAmount)"
        />
      </section>
    </div>
  </transition>
</template>

<script>
export default {
  name: "PriceSlider",
  props: ["sliderStatus"],
  data() {
    return {
      labelArr: ["font-weight-bold", "mr-2"],
      inputWidth: 70,
      maxAmount: "50"
    };
  },
  computed: {
    sliderState() {
      return this.sliderStatus ? "d-flex" : "d-none";
    }
  }
};
</script>

<style>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease-in-out;
}
</style>
