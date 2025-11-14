/////////////////////////////////////////////////////////// BEFORE UPDATE //////////////////////////////////////////////////////////
// function Rectangle(width, height) {
//   Rectangle.counter++;
//   this.width = width;
//   this.height = height;
// }

// Rectangle.counter = 0;

// Rectangle.getCounter = function () {
//   return this.counter;
// };

// Rectangle.prototype.calcArea = function () {
//   return this.width * this.height;
// };

// Rectangle.prototype.calcPerimeter = function () {
//   return 2 * (this.width + this.height);
// };

// Rectangle.prototype.toString = function () {
//   return `Rectangle: width = ${this.width}, height = ${
//     this.height
//   }, area = ${this.calcArea()}, perimeter = ${this.calcPerimeter()}`;
// };

// let rec1 = new Rectangle("300", "300");
// let rec2 = new Rectangle("300", "300");

// console.log(Rectangle.getCounter());
// console.log(rec1.toString());

/////////////////////////////////////////////////////////// AFTER UPDATE //////////////////////////////////////////////////////////
function Shape(width, height) {
  if (this.constructor == Shape) {
    throw "Cannot create object directly from Shape (abstract class)";
  }
  this.width = width;
  this.height = height;
}

// Rectangle
function Rectangle(width, height) {
  if (this.constructor === Rectangle) {
    if (Rectangle.counter >= 1) {
      throw "You can only create ONE Rectangle object!";
    }
    Rectangle.counter++;
  }
  Shape.call(this, width, height);
}
Rectangle.counter = 0;
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.getCounter = function () {
  return this.counter;
};

Rectangle.prototype.calcArea = function () {
  return this.width * this.height;
};

Rectangle.prototype.calcPerimeter = function () {
  return 2 * (this.width + this.height);
};

// Square
function Square(side) {
  if (this.constructor === Square) {
    if (Square.counter >= 1) {
      throw "You can only create ONE Square object!";
    }
    Square.counter++;
  }
  Rectangle.call(this, side, side);
}
Square.counter = 0;
Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.getCounter = function () {
  return this.counter;
};

Square.prototype.toString = function () {
  return `width = ${this.width}, height = ${
    this.height
  }, area = ${this.calcArea()}, perimeter = ${this.calcPerimeter()}`;
};

try {
  const r1 = new Rectangle(5, 10);
  // console.log("Rectangle 1:", r1.toString());

  const r2 = new Rectangle(3, 4);
  console.log("Rectangle 2:", r2.toString());
  console.log("Rectangle Count:", Rectangle.getCounter());
} catch (e) {
  console.error("Rectangle Error:", e);
}

try {
  const s1 = new Square(6);
  console.log(Square.getCounter());

  console.log("Square 1:", s1.toString());
  const s2 = new Square(8);
  console.log("Square 2:", s2.toString());
  console.log("Square Count:", Square.getCounter());
} catch (e) {
  console.error("Square Error:", e);
}
