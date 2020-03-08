<template>
  <transition-group name="fade" tag="div">
    <section
      id="items-block"
      class="row d-flex mb-3 align-items-center mt-5"
      v-for="item in products"
      :key="item.id"
    >
      <div v-if="isLess(item.price)">
        <div class="col-1 m-auto">
          <button class="btn btn-info" @click="$emit('add', item)">+</button>
        </div>

        <div class="col-sm-4">
          <img class="img-fluid d-block" :src="item.image" :alt="item.name" />
        </div>

        <div class="col">
          <h3 class="text-info">{{ item.name }}</h3>
          <p class="mb-0">{{ item.description }}</p>
          <Price
            class="h5 float-right"
            :prefix="'&euro;'"
            :value="Number(item.price)"
            :precision="2"
          />
        </div>
      </div>
    </section>
  </transition-group>
</template>

<script>
import Price from "./Price";

export default {
  name: "ProductList",
  props: ["products", "maximum"],
  components: { Price },
  methods: {
    isLess(price) {
      console.log("!!");
      return price <= this.maximum;
    }
  }
};
</script>
