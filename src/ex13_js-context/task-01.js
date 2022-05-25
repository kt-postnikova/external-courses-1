function Calculator() {
  this.result = 0;

  this.add = function (value) {
    this.result += value;
    return this;
  };
  this.multiply = function (value) {
    this.result *= value;
    return this;
  };
  this.divide = function (value) {
    this.result /= value;
    return this;
  };
  this.subtract = function (value) {
    this.result -= value;
    return this;
  };
  this.reset = function () {
    this.result = 0;
    return this;
  };
  this.getResult = function () {
    return this.result;
  };
  this.setState = function (value) {
    this.result = value;
    return this;
  };
}

const result = new Calculator();
module.exports = result;
