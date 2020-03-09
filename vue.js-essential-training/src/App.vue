<template>
  <div id="app" class="container mt-5">
    <h1>My Shop</h1>
    <p class="animated fadeInRight">Take a look at our offerings below</p>
    <Navbar :cart="cart" @toggle="toggleStatus" @delete="deleteItem" />
    <PriceSlider :sliderStatus="sliderStatus" :maximum.sync="maximum" />
    <ProductList :products="products" :maximum="maximum" @add="addItem" />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import PriceSlider from "./components/PriceSlider";
import ProductList from "./components/ProductList";

export default {
  name: "App",
  components: {
    Navbar,
    PriceSlider,
    ProductList
  },
  data() {
    return {
      products: [],
      maximum: 50,
      cart: [],
      sliderStatus: true
    };
  },
  mounted() {
    fetch("http://hplussport.com/api/products/order/price")
      .then(res => res.json())
      .then(data => (this.products = data))
      .catch(err => console.log(err));
  },
  methods: {
    toggleStatus() {
      this.sliderStatus = !this.sliderStatus;
    },
    addItem(product) {
      let whichProduct;
      const existing = this.cart.filter((item, index) => {
        if (item.product.id === product.id) {
          whichProduct = index;
          return true;
        } else {
          return false;
        }
      });

      if (existing.length) {
        this.cart[whichProduct].qty++;
      } else {
        this.cart.push({ product, qty: 1 });
      }
    },
    deleteItem(id) {
      if (this.cart[id].qty > 1) {
        this.cart[id].qty--;
      } else {
        this.cart.splice(id, 1);
      }
    }
  }
};
</script>
