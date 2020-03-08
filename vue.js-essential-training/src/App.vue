<template>
  <div id="app" class="container mt-5">
    <h1>My Shop</h1>
    <p class="animated fadeInRight">Take a look at our offerings below</p>
    <FontAwesomeIcon icon="shopping-cart" />
    <ProductList :products="products" :maximum="maximum" />
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import ProductList from "./components/ProductList";

export default {
  name: "App",
  data() {
    return {
      products: [],
      maximum: 50
    };
  },
  mounted() {
    fetch("http://hplussport.com/api/products/order/price")
      .then(res => res.json())
      .then(data => (this.products = data))
      .catch(err => console.log(err));
  },
  components: {
    FontAwesomeIcon,
    ProductList
  }
};
</script>
