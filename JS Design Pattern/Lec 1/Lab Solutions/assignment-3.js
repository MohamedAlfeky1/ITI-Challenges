// Factory Design Pattern

class ToyDuck {
  constructor(color, price) {
    this.type = "ToyDuck";
    this.color = color;
    this.price = price;
  }
}

class ToyCar {
  constructor(color, price, name) {
    this.type = "ToyCar";
    this.color = color;
    this.price = price;
    this.name = name;
  }
}

class ToyFactory {
  static createToy(type, color, price, name) {
    switch (type) {
      case "ToyDuck":
        return new ToyDuck(color, price);
      case "ToyCar":
        return new ToyCar(color, price, name);
      default:
        throw new Error("Unknown Toy type");
    }
  }
}

const toyDuck = ToyFactory.createToy("ToyDuck", "red", 500);
const toyCar = ToyFactory.createToy("ToyCar", "green", 700, "BMW");

console.log(toyDuck);
console.log(toyCar);
