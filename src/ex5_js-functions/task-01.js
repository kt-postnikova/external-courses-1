const Calculator = () => {
  let result = 0;

  const add = (value) => {
    result += value || 0;
    return add;
  };

  const subtract = (value) => {
    result -= value || 0;

    return subtract;
  };

  const divide = (value) => {
    result /= value || 0;

    return divide;
  };

  const multiply = (value) => {
    result *= value || 0;

    return multiply;
  };

  const getResult = () => result;

  const reset = () => {
    result = 0;
    return result;
  };

  return {
    add,
    subtract,
    divide,
    multiply,
    getResult,
    reset,
  };
};

const calculator = Calculator();
module.exports = calculator;
