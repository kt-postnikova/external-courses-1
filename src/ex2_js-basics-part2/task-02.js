module.exports = function getArrayValue(array) {
  array.forEach((element) => {
    console.log(element);
  });
  const arraySum = array.reduce((sum, current) => sum + current, 0);
  console.log(arraySum);
};
