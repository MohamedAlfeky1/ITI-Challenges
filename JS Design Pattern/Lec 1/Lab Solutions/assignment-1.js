// Singleton Design Pattern

class Ceo {
  constructor(name, age, address) {
    if (Ceo.instance) {
      return Ceo.instance;
    }
    this.name = name;
    this.age = age;
    this.address = address;
    Ceo.instance = this;
  }
}

let myCeo = new Ceo("ahmed", "30", "Shibin");

let myNewCeo = new Ceo("ALi", "55", "Cairo");

console.log(myCeo);

console.log(myNewCeo);
