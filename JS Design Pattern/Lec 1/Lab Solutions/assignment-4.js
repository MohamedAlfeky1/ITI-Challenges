// Singleton Design Pattern

class ConfigureVals {
  constructor(xpoint = 0, ypoint = 0, shape = null) {
    if (ConfigureVals.instance) {
      return ConfigureVals.instance;
    }
    this.xpoint = xpoint;
    this.ypoint = ypoint;
    this.shape = shape;
    ConfigureVals.instance = this;
  }

  static getConfiguration(x, y, shape) {
    if (!ConfigureVals.instance) {
      ConfigureVals.instance = new ConfigureVals(x, y, shape);
    }
    return ConfigureVals.instance;
  }
}

const config1 = ConfigureVals.getConfiguration(10, 20, "circle");
const config2 = ConfigureVals.getConfiguration(5, 15, "square");

console.log(config1);
console.log(config2);

console.log(config1 === config2); // true
