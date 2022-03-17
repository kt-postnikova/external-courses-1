module.exports = function addNumbers(a, b) {
  const sum = a + b;
  return parseFloat(Math.fround(sum).toFixed(3));
};
