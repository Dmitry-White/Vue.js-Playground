<template>
  <div id="app" class="container mt-5">
    <Checkout :cart="cart" @delete="deleteItem" @add="addItem" />
    <Products
      :cart="cart"
      :sliderStatus="sliderStatus"
      :products="products"
      :maximum.sync="maximum"
      @toggle="toggleStatus"
      @delete="deleteItem"
      @add="addItem"
    />
  </div>
</template>

<script>
import Products from "./components/Products";
import Checkout from "./components/Checkout";

export default {
  name: "App",
  components: {
    Products,
    Checkout
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
