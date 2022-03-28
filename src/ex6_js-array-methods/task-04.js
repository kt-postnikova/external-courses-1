module.exports = function filterArray(array, callback) {
  const resultArray = [];
  for (let index = 0; index < array.length; index += 1) {
    if (callback(array[index], index, array)) {
      resultArray.push(array[index]);
    }
  }
  return resultArray;
};
