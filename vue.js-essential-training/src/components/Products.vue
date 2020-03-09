<template>
  <section id="products">
    <h1>My Shop</h1>
    
    <p class="animated fadeInRight">Take a look at our offerings below</p>
    <Navbar :cart="cart" />
    <PriceSlider :sliderStatus="sliderStatus" :maximum.sync="maximum" />
    <ProductList :products="products" :maximum="maximum" />
  </section>
</template>

<script>
import Navbar from "./Navbar";
import PriceSlider from "./PriceSlider";
import ProductList from "./ProductList";

export default {
  name: "Products",
  props: ["cart", "sliderStatus", "products", "maximum"],
  components: {
    Navbar,
    PriceSlider,
    ProductList
  }
};
</script>

<style></style>
