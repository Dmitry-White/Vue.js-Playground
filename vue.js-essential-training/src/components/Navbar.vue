<template>
  <nav id="nav-block" class="navbar navbar-light fixed-top">
    <div class="navbar-text ml-auto d-flex">
      <button
        class="btn btn-sm btn-outline-success"
        @click="$parent.$emit('toggle')"
      >
        <FontAwesomeIcon icon="dollar-sign" />
      </button>
      <transition
        name="custom"
        enter-active-class="animated fadeInDown"
        leave-active-class="animated fadeOutUp"
      >
        <div class="dropdown ml-2" v-if="countItems(cart)">
          <button
            class="btn btn-success btn-sm dropdown-toggle"
            id="cartDropdown"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="fas fa-shopping-cart mx-2"></i>
            <span class="badge badge-pill badge-light">{{ cartQty }}</span>
            <Price :value="Number(cartTotal)" />
          </button>

          <div
            class="dropdown-menu dropdown-menu-right"
            aria-labelledby="cartDropdown"
          >
            <div v-for="(item, index) in cart" :key="index">
              <div class="dropdown-item-text text-nowrap text-right">
                <span
                  class="badge badge-pill badge-warning align-text-top mr-1"
                  >{{ item.qty }}</span
                >
                {{ item.product.name }}
                <Price :value="Number(item.product.price)" />
                <a
                  href="#"
                  @click.stop="$parent.$emit('delete', index)"
                  class="badge badge-danger text-white"
                  >-</a
                >
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import Price from "./Price";

export default {
  name: "Navbar",
  props: ["cart"],
  components: {
    FontAwesomeIcon,
    Price
  },
  computed: {
    cartTotal() {
      let sum = 0;
      this.cart.forEach(item => {
        const itemPrice = item.product.price;
        const itemQty = item.qty;
        sum += itemPrice * itemQty;
      });
      return sum;
    },
    cartQty() {
      let qty = 0;
      this.cart.forEach(item => {
        const itemQty = item.qty;
        qty += itemQty;
      });
      return qty;
    }
  },
  methods: {
    countItems(arr) {
      return arr.length;
    }
  }
};
</script>

<style></style>
