<template>
  <button :type="type" @click="handler" class="btn" :class="extraClass">
    <slot></slot>
  </button>
</template>

<script>
const CustomButton = {
  props: ["type", "handler", "extraClass"]
};

export default CustomButton;
</script>
