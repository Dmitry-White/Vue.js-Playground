const data = {
  maximum: 50,
  products: null,
  cart: [],
  slugText: 'test',
  labelArr: ['font-weight-bold', 'mr-2'],
  inputWidth: 70,
  sliderStatus: true,
};

const computed = {
  timeStatic() {
    return this.getTime();
  },
  slugetize() {
    return this.slugText
      .toLowerCase()
      .replace(/[^\w ]+/g, '')
      .replace(/ +/g, '-')
      + ` ${this.timeStatic} / ${this.timeDynamic()}`;
  },
  sliderState() {
    return this.sliderStatus ? 'd-flex' : 'd-none'
  },
  cartTotal() {
    let sum = 0;
    for (key in this.cart) {
      const itemPrice = this.cart[key].product.price;
      const itemQty = this.cart[key].qty;
      sum += itemPrice * itemQty;
    }
    return sum;
  },
  cartQty() {
    let qty = 0;
    for (key in this.cart) {
      const itemQty = this.cart[key].qty;
      qty += itemQty;
    }
    return qty;
  }
};

function mounted() {
  fetch('http://hplussport.com/api/products/order/price')
    .then((res) => res.json())
    .then((data) => this.products = data)
    .catch((err) => console.log(err));
};

const methods = {
  isLess(price) {
    return price <= this.maximum;
  },
  countItems(arr) {
    return arr.length
  },
  addItem(product) {
    let whichProduct;
    const existing = this.cart.filter((item, index) => {
      if (item.product.id === product.id) {
        whichProduct = index;
        return true
      } else {
        return false
      }
    });

    if (existing.length) {
      this.cart[whichProduct].qty++;
    } else {
      this.cart.push({ product, qty: 1 })
    }
  },
  deleteItem(id) {
    if (this.cart[id].qty > 1) {
      this.cart[id].qty--;
    } else {
      this.cart.splice(id, 1);
    }
  },
  getTime() {
    const data = new Date();
    return `${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`;
  },
  timeDynamic() {
    return this.getTime();
  },
};

Vue.filter('currency', function (price) {
  const formattedPrice = Number.parseFloat(price).toFixed(2);
  return `$${formattedPrice}`;
})

Vue.component('price', {
  props: {
    prefix: {
      type: String,
      default: '$',
    },
    value: Number,
    precision: {
      type: Number,
      default: 1
    }
  },
  template: '<span>{{ `${this.prefix}${Number.parseFloat(this.value).toFixed(this.precision)}` }}</span>'
});


const app = new Vue({
  el: "#app",
  data,
  computed,
  mounted,
  methods,
});