module.exports = function mapArray(array, callback) {
  const resultArray = [];
  for (let index = 0; index < array.length; index += 1) {
    const result = callback(array[index], index, array);
    resultArray.push(result);
  }
  return resultArray;
};
