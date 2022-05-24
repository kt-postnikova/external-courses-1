const Calculator = {

  result: 0,

  add(value) {
    this.result += value;
    return this;
  },
  multiply(value) {
    this.result *= value;
    return this;
  },
  divide(value) {
    this.result /= value;
    return this;
  },
  subtract(value) {
    this.result -= value;
    return this;
  },
  reset() {
    this.result = 0;
    return this;
  },
  getResult() {
    return this.result;
  },
  setState(value) {
    this.result = value;
    return this;
  },
};

module.exports = Calculator;
