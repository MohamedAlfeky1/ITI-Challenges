// Observer Design Pattern

// Subject (Store)
class Store {
  constructor() {
    this.products = [];
    this.subscribers = [];
  }

  subscribe(observer) {
    this.subscribers.push(observer);
  }

  unsubscribe(observer) {
    this.subscribers = this.subscribers.filter((o) => o !== observer);
  }

  addProduct(product) {
    this.products.push(product);
    this.notify(product);
  }

  notify(product) {
    this.subscribers.forEach((sub) => sub.update(product));
  }
}

// Observer (Customer)
class Customer {
  constructor(name) {
    this.name = name;
  }

  update(product) {
    console.log(
      `${this.name} received notification: New product - ${product.name} at $${product.price}`
    );
  }
}

const store = new Store();

const ali = new Customer("Ali");
const sara = new Customer("Sara");

store.subscribe(ali);
store.subscribe(sara);

store.addProduct({ name: "iPhone 16", price: 1200 });
// Ali received notification: New product - iPhone 16 at $1200
// Sara received notification: New product - iPhone 16 at $1200

console.log("#".repeat(25));

store.unsubscribe(sara);
store.addProduct({ name: "Samsung S30", price: 900 });
// Ali receives it, Sara لا
