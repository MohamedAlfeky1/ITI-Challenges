class Shape {
  constructor() {}
  calcArea() {
    return "Override ME";
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  calcArea() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  calcArea() {
    return Math.PI * this.radius ** 2;
  }
}

const shapes = [
  new Rectangle(5, 10),
  new Circle(7),
  new Rectangle(3, 6),
  new Circle(4),
];

shapes.forEach((shape) => {
  let constarcturName = shape.constructor.name;
  let shapeCalcArea = Math.round(shape.calcArea());
  console.log(`${constarcturName} Calcarea is: ${shapeCalcArea}`);
});
