class ShoppingCart {
  #items = [];

  addItem(name, price) {
    this.#items.push({name, price});
  }

  removeItem(name) {
    return this.#items = this.#items.filter(item => item.name !== name)
  }

  getTotal() {
    return this.#items.reduce((acc, item) => acc + item.price,0);
  }

  getItems() {
    return this.#items;
  }
}

const cart1 = new ShoppingCart();

cart1.addItem('Spaghetti', 500);
cart1.addItem('Rice', 50);
cart1.addItem('Juice', 80);

console.log(cart1.getItems());
console.log(cart1.getTotal());

cart1.removeItem('Rice');

console.log(cart1.getItems());
console.log(cart1.getTotal());
