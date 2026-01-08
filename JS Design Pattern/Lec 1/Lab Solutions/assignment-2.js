// Factory Design Pattern

class Truck {
  constructor(model, price) {
    this.type = "Truck";
    this.model = model;
    this.price = price;
  }
}

class Motorcycle {
  constructor(model, price) {
    this.type = "Motorcycle";
    this.model = model;
    this.price = price;
  }
}

class Bmw {
  constructor(model, price) {
    this.type = "BMW";
    this.model = model;
    this.price = price;
  }
}

class VehicleFactory {
  // Static Method
  static createVehicle(type, model, price) {
    type = type.toLowerCase();
    switch (type) {
      case "truck":
        return new Truck(model, price);
      case "motorcycle":
        return new Motorcycle(model, price);
      case "bmw":
        return new Bmw(model, price);
      default:
        throw new Error("Unknown vehicle type");
    }
  }
}

const car1 = VehicleFactory.createVehicle("Truck", "Ford F-150", 55000);
const car2 = VehicleFactory.createVehicle("Motorcycle", "Yamaha R1", 19000);
const car3 = VehicleFactory.createVehicle("BMW", "BMW M5 Competition", 103000);

console.log(car1);
console.log(car2);
console.log(car3);
