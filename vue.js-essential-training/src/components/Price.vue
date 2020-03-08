<template>
  <span>{{
    `${this.prefix}${Number.parseFloat(this.value).toFixed(this.precision)}`
  }}</span>
</template>

<script>
export default {
  name: 'Price',
  props: {
    prefix: { type: String, default: "$" },
    value: Number,
    precision: { type: Number, default: 1 }
  }
};
</script>
