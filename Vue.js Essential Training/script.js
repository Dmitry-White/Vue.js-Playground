const data = {
  maximum: 50,
  products: null,
  cart: [],
  slugText: 'test',
  labelArr: ['font-weight-bold', 'mr-2'],
  inputWidth: 70,
  sliderStatus: true,
}
const app = new Vue({
  el: "#app",
  data,
  computed: {
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
    }
  },
  mounted() {
    fetch('http://hplussport.com/api/products/order/price')
      .then((res) => res.json())
      .then((data) => this.products = data)
      .catch((err) => console.log(err));
  },
  methods: {
    isLess(price) {
      return price <= this.maximum;
    },
    countItems(arr) {
      return arr.length
    },
    addItem(item) {
      this.cart.push(item)
    },
    getTime() {
      const data = new Date();
      return `${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`;
    },
    timeDynamic() {
      return this.getTime();
    },
  },
});