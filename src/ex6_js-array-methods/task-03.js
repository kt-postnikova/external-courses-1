module.exports = function findEvery(array, callback) {
  for (let index = 0; index < array.length; index += 1) {
    if (!callback(array[index], index, array)) {
      return false;
    }
  }
  return true;
};
