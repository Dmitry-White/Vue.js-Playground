function isLess(price) {
  return price <= this.maximum;
}

function cartTotal() {
  let sum = 0;
  this.cart.forEach(item => {
    const itemPrice = item.product.price;
    const itemQty = item.qty;
    sum += itemPrice * itemQty;
  });
  return sum;
}

const countItems = (arr) => {
  return arr.length;
}

export {
  isLess,
  cartTotal,
  countItems,
}