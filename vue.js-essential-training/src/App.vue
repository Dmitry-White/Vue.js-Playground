<template>
  <div id="app" class="container mt-5">
    <h1>My Shop</h1>
    <p class="animated fadeInRight">Take a look at our offerings below</p>
    <FontAwesomeIcon icon="shopping-cart" />
    <Price :value="Number(3)" />
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import Price from "./components/Price";

export default {
  name: "App",
  components: {
    FontAwesomeIcon,
    Price
  }
};
</script>
